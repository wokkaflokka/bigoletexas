import { useState, useEffect, useRef } from 'react';
import { SearchResult } from '../utils/search';

export const useRaptor = (result: SearchResult | null) => {
  const [raptorSize, setRaptorSize] = useState(261); // Default size
  const [texasScale, setTexasScale] = useState(1.0);
  const [searchScale, setSearchScale] = useState(1.0);
  const [offset, setOffset] = useState(0);
  const phraseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (phraseRef.current && result) {
      const height = phraseRef.current.offsetHeight;
      if (height < 50) {
        setRaptorSize(318);
        setOffset(35);
      } else if (height < 100) {
        setRaptorSize(288);
        setOffset(5);
      } else {
        setRaptorSize(261);
        setOffset(0);
      }

      // Calculate scale based on ratio
      if (result.bigger) {
        // Search term is bigger than Texas
        setTexasScale(1.0);
        setSearchScale(1.0 / result.ratio); // Scale down the larger raptor
      } else {
        // Texas is bigger than search term
        setTexasScale(1.0 / result.ratio); // Scale down Texas
        setSearchScale(1.0); // Search term stays at scale 1.0
      }
    }
  }, [result]);

  return {
    raptorSize,
    texasScale,
    searchScale,
    offset,
    phraseRef
  };
}; 