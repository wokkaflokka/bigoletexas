%w(rack camping camping/session camping/reloader ./bigoletexas).each { | r | require r }

use Rack::Reloader
use Rack::Static,
    :urls => %w(/static/css /static/js /static/fonts /static/image),
    :root => File.expand_path(File.dirname(__FILE__))

run Texas

