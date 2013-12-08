require 'camping'
require 'yaml'

Camping.goes :Texas

module Texas
  def r404(path)
    render :fouroh
  end

  def r501(method)
    render :fiveoh
  end

  def r500(klass, method, ex)
    puts "#{klass}##{method} #{ex}"
    render :fiveohoh
  end
end


module Texas::Controllers

  class Index < R '/'
    def get
      render :bigole
    end
    
    def post
      redirect '/'
    end
  end

  class BigOle < R '/git-sum'
    def get
      redirect '/'
    end

    def post
      if not input.search_region or input.search_region.to_s.empty?
        render :fail
      else
        @search_term = input.search_region.to_s
        if not @texas_bigger or not @search_data or not @texas_smaller
          @texas_bigger   = []
          @texas_smaller  = []
          
          @search_data   = YAML::load_file('data/base.yaml')
          
          File.open('data/texas-bigger.data','r').each_line do |line|
            @texas_bigger << line.chomp("\n")
          end

          File.open('data/texas-smaller.data','r').each_line do |line|
            @texas_smaller << line.chomp("\n")
          end
        end

        flattened_string = @search_term.downcase.gsub(/\s+/, "")
        
        if flattened_string == "mom"
          @search_term     = "Your Mom"
          flattened_string = "yourmom"
        end          

        @texas_bigger.shuffle!
        @texas_smaller.shuffle!

        results = @search_data.keys.select{|k| k.downcase.gsub(/\s+/, "") == flattened_string }
        if results.empty?
          results  = @search_data.keys.select{|k| k.downcase.gsub(/\s+/,"").include?(flattened_string) }.sort_by{|k|k.size}
        end
        if results.empty?
          render :fail
        else
          results.uniq!
          @search_result = @search_data[results.first]
          if results.first != @search_term
            @search_term = results.first
          end
          render :gitsum
        end
      end
    end
  end

  class Howdy < R '/howdy-yall'
    def get
      render :howdy
    end

    def post
      redirect '/'
    end
  end
  
  class Thanks < R '/thanks-yall'
    def get
      render :thanks
    end

    def post
      redirect '/'
    end
  end
end

module Texas::Views

  def layout
    html do
      head do
        link :rel => "shortcut icon", :href => "http://wokkaflokka.dotgeek.org/favicon.ico"
        title { "Big 'Ole Texas" }
        style :type => "text/css" do
          File.read('data/reset.css')
        end
        style :type => "text/css" do
          File.read('data/text.css')
        end 
        style :type => "text/css" do
          File.read('data/960.css')
        end
        style :type => "text/css" do
          File.read('data/bot.css')
        end
        script :type => "text/javascript" do
          File.read('js/jquery.js')
        end
        script :type => "text/javascript" do
          File.read('js/breakpoints.js')
        end
        script :type => "text/javascript" do
          File.read('js/adjust-size.js')
        end
        #script :type => "text/javascript" do
        #  File.read('js/league-gothic.js')
        #end
        #script :type => "text/javascript" do
        #  File.read('js/league-gothic.js')
        #end
        #script :type => "text/javascript" do
        #  File.read('js/analytics.js')
        #end
      end
      body do
        div.header! :class => "container_16 alpha omega" do
          div.bot! :class => "grid_16 alpha omega", :style => "width: 100%;" do
            img :src => "http://wokkaflokka.dotgeek.org/header.png", :border => "0", :width => "100%", :height => "15%"
          end
        end
        div.bodyContainer! do
          div.main! do
            self << yield
          end
        end
        div.footer! :class => "container_12" do
          div :class => "grid_2" do end
          div.howdy! :class => "grid_2" do
            a :href => '/howdy-yall' do
              img :src => "http://wokkaflokka.dotgeek.org/howdy.png", :border => "0";
            end
          end
          div :class => "grid_1" do end
          div.logo! :class => "grid_2" do
            a :href => '/' do
              img :src => "http://wokkaflokka.dotgeek.org/logo.png", :border => "0";
            end
          end
          div :class => "grid_1" do end
          div.thanks! :class => "grid_2" do
            a :href => '/thanks-yall' do
              img :src => "http://wokkaflokka.dotgeek.org/thanks.png", :border => "0";
            end
          end
          div :class => "grid_2" do end
        end
      end
    end
  end
  
  def howdy
    div.formWrapper! :class => "container_12" do
      div.grid_12 do end
      div.grid_12 do
        text! "Howdy, y'all! In case you were hankerin' to know, Big Ole Texas is a StumpGrindin' Production.".upcase
        br
        br
      end
      div.grid_12 do
        text! "We sure hope you enjoyed it, as there is more to come! But don't be a stranger, ya hear? Shoot us an e-mail at 'thebossman@stumpgrindin.com'.".upcase
      end
      div.grid_12 do
        text! "Or, if you're one of them city-slicker types, you might reckon to check us out on ".upcase
        a :href => "https://twitter.com/stumpgrindinc" do 
          "Twitter.".upcase
        end
      end
      div.grid_12 do
        br  
        text! "Want to know more about all things Texas? Check out ".upcase
        a :href => "https://www.facebook.com/allthingstexan" do
          "All Things Texan!".upcase
        end
        br
      end
      div.grid_12 do
          text! "Y'all come back real soon, now, ya hear? ".upcase
          br
      end
      div.grid_12 do end
    end
  end

  def thanks
    div.formWrapper! :class => "container_12" do
      div.grid_12 do end
      div.grid_12 do
        text! "Woowee, folks! Hosting a website is TUFF business! That's why we wanted to give a quick holler to the kind folks down at Dotgeek!".upcase
        br
      end
      div.grid_12 do
        text! "So thanks, Dotgeek, for streamlining the development of this site (and giving us some hosting)!".upcase
        br
      end
      div.grid_12 do
        text! "We Texans aren't ones to take things lightly, so for your service to this great state, we've bestowed you the title of Honorary Texan's.".upcase
      end
      div.grid_12 do
        a :href => "http://dotgeek.org" do
          img.honorary! :src => 'http://wokkaflokka.dotgeek.org/honorary.png'
        end
      end
      div.grid_12 do 
        "(Just don't get uppity like them yankee folk, ya hear now?!)".upcase
      end
      div.grid_12 do end
    end
  end

  def bigole
    div.formWrapper! :class => "container_12" do
      div :class => 'wrapper' do
        div.formLabel! :class => 'grid_6' do
          div.text do
            "Folks, there's no denying it.".upcase
          end
          div :style => "padding:8px;" do end
          div.text do
            span.biggest do
              "Texas".upcase
            end
            span do
              " is ".upcase
            end
            span.biggest do
              "big".upcase
            end
            span do
              "."
            end
          end
          div :style => "padding:8px;" do end
          div.text do
            span do
              "Ever wonder just ".upcase
            end
            span.bigger do
              "how".upcase
            end
            span do
              " big".upcase
            end
          end
          div.text do
            "Big Ole Texas is?".upcase
          end
          div.text do
            "Enter a country or US state".upcase
          end
          div.text do
            "and see for yerself!".upcase
          end
        end
        div.formItem! :class => 'grid_6' do
          form.bigole! :action => R(BigOle), :method => 'post' do
            input.region! :name => 'search_region', :type => 'text', :style => "font-size:30px; font-weight:bold; text-align:center;"; br
            input.submit! :type => 'image', :src => 'http://wokkaflokka.dotgeek.org/getsome.png', :alt => 'Gitcha Sum TX!'
          end
        end
      end
    end
  end

  def gitsum
    div_name = ''
    script :type => "text/javascript" do
      File.read('js/rmHeader.js')
    end

    def trunc(dubble)
      if (dubble.include? '.')
       chunks = dubble.split('.')
       "#{chunks[0]}.#{chunks[1][0..1]}"
      else
        dubble
      end
    end
    case @search_result["bigger"]
    when "true"
      div_name = 'smaller'
      index    = rand(@texas_smaller.size)
      phrase   = @texas_smaller[index]
      ratio    = trunc(@search_result["ratio"])
    else
      div_name = 'bigger'
      index    = rand(@texas_bigger.size)
      phrase   = @texas_bigger[index]
      ratio    = trunc((1.0/@search_result["ratio"].to_f).to_s)
    end
    if @search_term.include?("Texas")
      t = ["Yippee! Searching for Texas tickles my fancy and makes me wanna do my fiddlin' jig!","Texas is Texas, ya nitwit! Shouldnt you be searching for something fresh, cowboy?"]
      phrase = t.shuffle.first
      ratio = 1.0
    else
      temp = @search_term.downcase.gsub(/\s+/,"")
      if temp == "yourmom" or temp == "yomom" or temp == "mom" or temp == "yomomma" or temp == "yomama"
        t = ["Yeeeeehawww! Ain't no steer in our cattle yard as big as yo momma!", 
             "Error: numeric overflow attempting to calculate size of 'Your Mom'.",
             "Shucks, partner, Texas is big, but it ain't that big! Yo momma is SIZE_TERM larger than Texas."]
        phrase = t.shuffle.first 
      end
    end
    if phrase.include?("SIZE_TERM_INC")
      t = rand()
      if t < 0.25 
        phrase = phrase.gsub("SIZE_TERM_INC","100X")
      elsif t < 0.5
        phrase = phrase.gsub("SIZE_TERM_INC","200X")
      else
        phrase = phrase.gsub("SIZE_TERM_INC","300X")
      end
    end
    if phrase.include?("BIG_RANDOM")
      big_random = rand(712345897) + rand(99999999) + 100100100
      phrase = phrase.gsub("BIG_RANDOM", big_random.to_s)
    end
    processed = phrase.gsub("REGION_TERM",@search_term).gsub("SIZE_TERM","#{ratio}X")
    div.postFormWrapper! :class => "container_12" do
      div.phrase! :class => 'grid_12' do
        processed.to_s.upcase
      end
      if ratio != 1.0
        div.wrapper do
          div.grid_6.raptor_texas! :style => "padding-top: 25px;" do
            img.r_t! :align => "middle", :src => 'http://wokkaflokka.dotgeek.org/raptor.png'
          end
          div.grid_6.raptor_other! :style => "padding-top: 25px;" do
            img.r_o! :align => "middle", :src => 'http://wokkaflokka.dotgeek.org/raptor.png'
          end
        end
        div.wrapper do
          div.grid_6 :style => "padding-top: 25px;" do
            "TEXAS"
          end
          div.grid_6 :style => "padding-top: 25px;" do
            @search_term.upcase
          end
        end
        div.wrapper :style => "padding-top: 45px; padding-bottom: 10px;" do
          div.formLabel! :class => 'grid_6', :style => "padding-top: 20px;" do
            "Have another go, partner?".upcase
          end
          div.formItem! :style => "position: relative; bottom:0px;" do
            form :action => R(BigOle), :method => 'post' do
              input.grid_4 :name => 'search_region', :type => 'text', :style => "font-size:30px; font-weight:bold; text-align:center;margin-top:45px;"; br
              input.grid_2 :style => "height:9%;padding-top:42px;", :type => 'image', :src => 'http://wokkaflokka.dotgeek.org/getsome.png', :alt => 'Gitcha Sum TX!'
            end
          end
        end
      else
        div.wrapper :style => "padding-top: 45px; padding-bottom: 10px;" do
          div.formLabel! :class => 'grid_6', :style => "padding-top: 20px;" do
            "Have another go, partner?".upcase
          end
          div.formItem! :style => "position: relative; bottom:0px;" do
            form :action => R(BigOle), :method => 'post' do
              input.grid_4 :name => 'search_region', :type => 'text', :style => "font-size:30px; font-weight:bold; text-align:center;margin-top:45px;"; br
              input.grid_2 :style => "height:9%; padding-top:15px;", :type => 'image', :src => 'http://wokkaflokka.dotgeek.org/getsome.png', :alt => 'Gitcha Sum TX!'
            end
          end
        end
        div.svgAnchor! :class => 'grid_12' do end     
      end
    end
    div.percentageContainer! :style => "display: none; visibility: hidden;"  do
      ratio
    end
    div.isBigger! :style => "display: none; visibility: hidden;"  do
      div_name
    end
    if ratio == 1.0
      script :type => "text/javascript" do
        File.read('js/SVG.js')
      end
    else
      script :type => "text/javascript" do
        File.read('js/explodeImg.js')
      end
    end
  end

  def fail

    script :type => "text/javascript" do
      File.read('js/rmHeader.js')
    end

    if @search_term.to_s.empty?
      text = [
              "Hold yer horses! Just because we talk slow doesn't mean we are slow. Gotta enter something there first.",
              "Shucks! Ya gotta enter something, ya pinhead!"
      ]
      t = rand()
      if t < 0.25 or t > 0.65
        phrase = text[0]
      else
        phrase = text[1]
      end
    else
      unless @texas_notfound
        @texas_notfound = []
        File.open('data/texas-notfound.data','r').each_line do |line|
          @texas_notfound << line.chomp("\n")
        end
      end
      index = rand(@texas_notfound.size)
      phrase = @texas_notfound[index]
      if phrase.include?("REGION_TERM")
        phrase = phrase.gsub("REGION_TERM", @search_term.to_s)
      end
    end
    div.postFormWrapper! :class => "container_12" do
      div.phrase! :class => "grid_12" do phrase.upcase end
      div.svgAnchor! :class => "grid_12" do end
      div.wrapper :style => "padding-top: 45px; padding-bottom: 10px;" do
        div.formLabel! :class => 'grid_6', :style => "padding-top: 20px;" do
          "Have another go, partner?".upcase
        end
        div.formItem! :style => "position: relative; bottom:0px;" do
          form :action => R(BigOle), :method => 'post' do
            input.grid_4 :name => 'search_region', :type => 'text', :style => "font-size:30px; font-weight:bold; text-align:center;margin-top:45px;"; br
            input.grid_2 :style => "height:9%;", :type => 'image', :src => 'http://wokkaflokka.dotgeek.org/getsome.png', :alt => 'Gitcha Sum TX!'
          end
        end
      end
    end
    div.percentageContainer! :style => "display: none; visibility: hidden;" do
      "1.00"
    end
    script :type => "text/javascript" do
      File.read('js/SVG.js')
    end
  end

  def fouroh
    div.formWrapper! :class => "container_12" do
      div.grid_12 do
        "Shucks, partner! I reckon you're diggin' for clams in a goddamned cornfield! We ain't got no pages here!".upcase
      end
    end
  end
  
  def fiveoh
    div.formWrapper! :class => "container_12" do
      div.grid_12 do
        "Well, I'll be damned! Looks like our scientists done messed up...".upcase
      end
    end
  end

  def fiveohoh
    div.formWrapper! :class => "container_12" do
      div.grid_12 do
        "Hooowee! This interweb voodoo is corn-fusing me! Looks like we log-jammed our pipes!".upcase
      end
    end
  end
end
=begin
module Texas::Models
  class Region < Base; end
  class Bigger < Base; end
  class Smaller < Base; end
  class NotFound < Base; end

  class CreateTheBasics < V 1.0
    def self.up
      create_table Region.table_name, :force => true do |t|
        t.column :id, :integer, :null => false
        t.column :name, :string, :limit => 255, :null => false
        t.column :area, :string, :limit => 32, :null => false
        t.column :ratio, :string, :limit => 32, :null => false
        t.column :bigger, :integer, :null => false
        t.column :notes, :string, :limit => 1000, :null => false
      end
      YAML::load_file('data/base.yaml').each do |k,v|
        bigger = (v["bigger"] == "true")? 1 : 0
        Region.create(:name => k.to_s, :area => v["size"].to_s,
                      :ratio => v["ratio"].to_s, :bigger => bigger, :notes => v["notes"].to_s)
      end
      #
      create_table Bigger.table_name, :force => true do |t|
        t.column :id, :integer, :null => false
        t.column :text, :string, :limit => 300, :null => false
      end
      File.open('data/texas-bigger.data','r').each_line do |line|
        Bigger.create :text => line.chomp("\n")
      end
      #
      create_table Smaller.table_name, :force => true do |t|
        t.column :id, :integer, :null => false
        t.column :text, :string, :limit => 300, :null => false
      end
      File.open('data/texas-smaller.data','r').each_line do |line|
        Smaller.create :text => line.chomp("\n")
      end
      #
      create_table NotFound.table_name, :force => true do |t|
        t.column :id, :integer, :null => false
        t.column :text, :string, :limit => 300, :null => false
      end
      File.open('data/texas-notfound.data','r').each_line do |line|
        NotFound.create :text => line.chomp("\n")
      end
    end
    def self.down
      drop_table Region.table_name
      drop_table Bigger.table_name
      drop_table Smaller.table_name
      drop_table NotFound.table_name
    end
  end
end
=end
