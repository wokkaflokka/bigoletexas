import { baseData } from '../data/base';
import { biggerPhrases, smallerPhrases, notFoundPhrases, emptyPhrases, texasPhrases, momPhrases } from '../data/phrases';

export interface SearchResult {
  // the search term that was used
  searchTerm: string;
  // the phrase to return for the search term
  phrase: string;
  // the size of search term geography (surface area) divided by the surface area of Texas
  ratio: number;
  // true if Texas is bigger than the search term
  bigger: boolean;
}

export class SearchService {
  private static instance: SearchService;

  private constructor() {}

  public static getInstance(): SearchService {
    if (!SearchService.instance) {
      SearchService.instance = new SearchService();
    }
    return SearchService.instance;
  }

  public search(term: string): SearchResult {
    if (!term.trim()) {
      return this.handleEmptySearch();
    }

    let processedTerm = term;
    const flattenedString = term.toLowerCase().replace(/\s+/g, '');
    
    // Check for mom-related terms
    if (['yourmom', 'yomom', 'mom', 'yomomma', 'yomama'].includes(flattenedString)) {
      processedTerm = 'Your Mom';
      return this.handleMomSearch();
    }

    if (flattenedString === 'texas') {
      return this.handleTexasSearch();
    }

    const results = Object.keys(baseData).filter(
      k => k.toLowerCase().replace(/\s+/g, '') === flattenedString
    );

    if (results.length === 0) {
      return this.handleNotFound( processedTerm);
    }

    return this.handleRegionSearch(results[0], processedTerm);
  }

  private handleEmptySearch(): SearchResult {
    const t = Math.random();
    const phrase = t < 0.25 || t > 0.65 ? emptyPhrases[0] : emptyPhrases[1];
    return { searchTerm: '',phrase, ratio: 1.00, bigger: false };
  }

  private handleTexasSearch(): SearchResult {
    const phrase = texasPhrases[Math.floor(Math.random() * texasPhrases.length)];
    return { searchTerm: 'Texas', phrase, ratio: 1.00, bigger: false };
  }

  private handleNotFound(term: string): SearchResult {
    const notFoundIndex = Math.floor(Math.random() * notFoundPhrases.length);
    let phrase = notFoundPhrases[notFoundIndex];
    if (phrase.includes('REGION_TERM')) {
      phrase = phrase.replace('REGION_TERM', term);
    }
    return { searchTerm: term, phrase, ratio: 1.00, bigger: false };
  }

  private handleRegionSearch(regionKey: string, processedTerm: string): SearchResult {
    const searchResult = baseData[regionKey];
    const texasBigger = !searchResult.bigger;
    const ratio = texasBigger ? 1.0 / searchResult.ratio : searchResult.ratio;
    
    const phrases = texasBigger ? biggerPhrases : smallerPhrases;
    const phraseIndex = Math.floor(Math.random() * phrases.length);
    let phrase = phrases[phraseIndex];

    if (phrase.includes('SIZE_TERM')) {
      phrase = phrase.replace('SIZE_TERM', `${ratio.toFixed(2)}X`);
    }
    if (phrase.includes('REGION_TERM')) {
      phrase = phrase.replace('REGION_TERM', processedTerm);
    }
    if (phrase.includes('SIZE_TERM_INC')) {
      const t = Math.random();
      const incValue = t < 0.25 ? '100X' : t < 0.5 ? '200X' : '300X';
      phrase = phrase.replace('SIZE_TERM_INC', incValue);
    }
    if (phrase.includes('BIG_RANDOM')) {
      const bigRandom = Math.floor(Math.random() * 712345897) + Math.floor(Math.random() * 99999999) + 100100100;
      phrase = phrase.replace('BIG_RANDOM', bigRandom.toString());
    }

    return { searchTerm: regionKey, phrase, ratio, bigger: texasBigger };
  }

  private handleMomSearch(): SearchResult {
    const phrase = momPhrases[Math.floor(Math.random() * momPhrases.length)];
    return { searchTerm: 'Your Mom', phrase, ratio: 1000000, bigger: false };
  }
} 