'use client';

import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { SearchService, SearchResult } from './utils/search';
import { useRaptor } from './hooks/useRaptor';
import { useTexasSvg } from './hooks/useTexasSvg';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [result, setResult] = useState<SearchResult | null>(null);
  const { raptorSize, texasScale, searchScale, offset, phraseRef } = useRaptor(result);
  const { svgRef } = useTexasSvg(result);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const searchService = SearchService.getInstance();
    setResult(searchService.search(searchTerm));
  };

  return (
    <>
      <Header />
      <div className="bodyContainer">
        <div className="formWrapper">
          {result ? (
            <div className="phrase" style={{ textAlign: 'center' }}>
              <div ref={phraseRef}>
                {result.phrase}
              </div>
            </div>
          ) : (
            <div className="phrase" style={{ textAlign: 'center' }}>
              <div className="text">
                <div style={{ marginBottom: '12px', lineHeight: '1.1' }}>
                  FOLKS, THERE&apos;S NO DENYING IT.
                </div>
                <div style={{ marginBottom: '12px', lineHeight: '1.1' }}>
                  <span style={{ fontSize: '2.1em', fontWeight: 'bold' }}>TEXAS</span>
                  <span> IS </span>
                  <span style={{ fontSize: '2.1em', fontWeight: 'bold' }}>BIG</span>
                  <span>.</span>
                </div>
                <div style={{ marginBottom: '12px', lineHeight: '1.1' }}>
                  <span style={{ fontSize: '1.8em' }}>HOW</span>
                  <span> BIG IS IT?</span>
                </div>
                <div style={{ marginBottom: '12px', lineHeight: '1.1' }}>
                  ENTER A COUNTRY OR US STATE
                </div>
                <div style={{ marginBottom: '20px', lineHeight: '1.1' }}>
                  AND SEE FOR YERSELF!
                </div>
              </div>
              <div className="search">
                <form onSubmit={handleSearch} style={{ textAlign: 'center' }}>
                  <input
                    type="text"
                    name="search_region"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                      fontSize: '30px',
                      fontWeight: 'bold',
                      textAlign: 'center',
                      width: '100%',
                      maxWidth: '360px',
                      padding: '10px',
                      border: 'none',
                      borderRadius: '5px',
                      boxShadow: '0 0 5px rgba(0,0,0,0.2)',
                      backgroundColor: 'white'
                    }}
                  />
                  <br />
                  <input
                    type="image"
                    src="/static/image/getsome.png"
                    alt="Gitcha Sum TX!"
                    style={{
                      height: '80px',
                      marginTop: '20px',
                      cursor: 'pointer',
                      width: '25%',
                      minWidth: '200px'
                    }}
                  />
                </form>
              </div>
            </div>
          )}
          {result && (
            <>
              {result.ratio !== 1.00 && (
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'center',
                  height: '300px',
                  alignItems: 'center',
                  margin: '20px 0'
                }}>
                  <div style={{ 
                    textAlign: 'center',
                    position: 'relative',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}>
                    <img 
                      src="/static/image/raptor.png" 
                      alt="Texas Raptor" 
                      style={{ 
                        height: `${raptorSize}px`,
                        width: 'auto',
                        transform: `scale(${texasScale})`,
                        position: 'relative',
                        top: `${offset}px`
                      }} 
                    />
                    <div style={{ marginTop: '10px' }}>
                      TEXAS
                    </div>
                  </div>
                  <div style={{ 
                    textAlign: 'center',
                    position: 'relative',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}>
                    <img 
                      src="/static/image/raptor.png" 
                      alt="Comparison Raptor" 
                      style={{ 
                        height: `${raptorSize}px`,
                        width: 'auto',
                        transform: `scale(${searchScale})`,
                        position: 'relative',
                        top: `${offset}px`
                      }} 
                    />
                    <div style={{ marginTop: '10px' }}>
                      {result.searchTerm.toUpperCase()}
                    </div>
                  </div>
                </div>
              )}
              {result.ratio === 1.00 && (
                <div ref={svgRef} style={{ 
                  position: 'relative', 
                  height: '225px',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: '20px 0'
                }} />
              )}
              <div style={{ 
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
                marginTop: '40px'
              }}>
                <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                  HAVE ANOTHER GO, PARTNER?
                </div>
                <form onSubmit={handleSearch} style={{ textAlign: 'center' }}>
                  <input
                    type="text"
                    name="search_region"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                      fontSize: '30px',
                      fontWeight: 'bold',
                      textAlign: 'center',
                      width: '100%',
                      maxWidth: '360px',
                      padding: '10px',
                      border: 'none',
                      borderRadius: '5px',
                      boxShadow: '0 0 5px rgba(0,0,0,0.2)',
                      backgroundColor: 'white'
                    }}
                  />
                  <br />
                  <input
                    type="image"
                    src="/static/image/getsome.png"
                    alt="Gitcha Sum TX!"
                    style={{
                      height: '80px',
                      marginTop: '20px',
                      cursor: 'pointer',
                      width: '25%',
                      minWidth: '200px'
                    }}
                  />
                </form>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
