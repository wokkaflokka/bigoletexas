#/usr/bin/env ruby

require 'rubygems'
require 'net/http'
require 'uri'
require 'zlib'

W_DIRECTORY    = "data"
GZ_FILE_PREFIX = "temp-data.gz"
GZ_DATA_FILE   = "#{W_DIRECTORY}/#{GZ_FILE_PREFIX}"
W_FILE_PREFIX  = "geographic-area-data.html"
HTML_DATA_FILE = "#{W_DIRECTORY}/#{W_FILE_PREFIX}"
WIKI_DATA_URL  = "http://en.wikipedia.org/wiki/List_of_political_and_geographic_subdivisions_by_total_area_(all)"

unless File.exists?(W_DIRECTORY) and File.directory?(W_DIRECTORY)
  p "Please specify a valid directory to store the data"
  exit 1
end

data_uri      = URI.parse(WIKI_DATA_URL)
data_request  = Net::HTTP::Get.new(data_uri.request_uri)
wiki_response = Net::HTTP.start(data_uri.host, data_uri.port) { |http|
  http.request(data_request)
}

# got the data
if wiki_response.code.to_i >= 200 and wiki_response.code.to_i <= 300
  begin
    if not wiki_response['content-encoding'].nil? and wiki_response['content-encoding'] =~ /gzip/
      File.open(GZ_DATA_FILE,"w") do |file|
        file.write(wiki_response.body)
      end
      Zlib::GzipReader.open(GZ_DATA_FILE) do |gzipped_data|
        File.open(HTML_DATA_FILE, 'w') do |html_data|
          html_data.write(gzipped_data.read)
        end
      end
    else
      File.open(HTML_DATA_FILE, 'w') do |html_data|
        html_data.write(wiki_response.body)
      end
    end
  rescue Exception => e
    p e.inspect
    p e.backtrace
    exit 1
  end
else
  p "Failed to get the data....wikipedia returned status code #{wiki_response.code}"
  exit 1
end

exit 0
