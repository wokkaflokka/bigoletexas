from fuzzywuzzy import fuzz
from fuzzywuzzy import process

import os, sys, time

KEY_SET_FILE = "data/key.set"

if not os.path.exists(KEY_SET_FILE):
    raise Exception("Key set cannot be located") 

keys = [str(line.strip()) for line in open(KEY_SET_FILE)]


"""

Let's only support searching for a single key for now.
We will hope that command line arguments will come quoted, but if that isn't the
case, we'll compress the words into a single string.

"""

search_term = ""
if len(sys.argv) < 2:
    raise Exception("Must pass a key to search for in the keyset!")
elif len(sys.argv) > 2:
    search_term = ' '.join(sys.argv[1:])
else:
    search_term = str(sys.argv[1])

start = time.clock()
if not search_term in keys:
    """ Arbitrarily return the 5 closest matches... """
    fuzzy_matches = process.extract(search_term, keys, limit=5)
else:
    fuzzy_matches = [(search_term, 100)]

elapsed = (time.clock() - start)
print elapsed

for match in fuzzy_matches:
    print match

sys.exit(0)
