import java.util.*;
import java.text.*;
import java.io.*;
import javax.xml.parsers.*;
import javax.xml.xpath.*;
import org.w3c.dom.*;

/*   

 import redis.clients.jedis.Jedis; 

*/


public final class ParseScrapedData {
    public static void main(String[] args) {
	try {
            DocumentBuilderFactory db = DocumentBuilderFactory.newInstance();
	    DocumentBuilder builder = db.newDocumentBuilder();
	    Document dom = builder.parse("data/geographic-area-data.html");
	    XPathFactory xpath    = XPathFactory.newInstance();
	    XPath path            = xpath.newXPath();
	    XPathExpression table = path.compile("//div[@id='mw-content-text']/table[contains(@class,'wikitable')]/tr");
	    NodeList wikiData     = (NodeList) table.evaluate(dom, XPathConstants.NODESET);

	    NodeList children;
	    String currentData, cleanData;
	    
	    /* Open output stream */
	    FileWriter fstream = new FileWriter("data/parsed.yaml");
	    BufferedWriter out = new BufferedWriter(fstream);

	    for (int i = 0; i < wikiData.getLength(); i++) {
		if (i == 0) {
		    continue;
		}
		out.write(new Integer(i).toString() + ":\n");
		children = wikiData.item(i).getChildNodes();
		for (int j = 0; j < children.getLength(); j++) {
		    currentData = (String) children.item(j).getTextContent();
		    switch(j) {
		    case 0:
			/* Current Data is empty */
			break;
		    case 1:
			cleanData   = decompose(currentData).trim().replaceAll("[^a-zA-Z\\s]+","");
			out.write("\tGeographic entity: " + cleanData + "\n");
			break;
		    case 2:
			/* Current Data is empty */
			break;
		    case 3:
			cleanData   = decompose(currentData).trim().replaceAll(",","");
			out.write("\tArea: " + cleanData + "\n");
			break;
		    case 4:
			/* Current Data is empty */
			break;
		    case 5:
			cleanData   = decompose(currentData).trim();
			out.write("\tNotes: " + cleanData + "\n");
			break;
		    case 6:
			/* Current Data is empty */
			break;
		    default:
			/* System.out.println("[" + j + "] Hit default case statement. Current Data is: " + currentData); */
			break;
		    }
		}
	    }
	    /* Close output stream */
	    out.close();
	}
	catch (Exception e) {
	    System.out.println(e);
	}
    }
    
    /* taken from StackOverflow... */
    public static String decompose(String s) {
	return Normalizer.normalize(s, Normalizer.Form.NFD).replaceAll("\\p{InCombiningDiacriticalMarks}+","");
    }
}