!SLIDE

# Redis Use Cases #

!SLIDE bullets

* Caching
* Session storage

!SLIDE

# But these are boring. #
# Show me the real stuff! #

!SLIDE bullets incremental

* Sharing data across processes
* Worker queues
* Statistical data
* Webworkers (with Node.js)

!SLIDE

# Examples #
## Sharing data across processes ##

!SLIDE bullets incremental

# Scalarium #

* Internal messages get a request token
* Stored in Redis
* Removed on successful delivery

!SLIDE bullets incremental

# Scalarium #

* Internal and external messaging is encrypted
* Certificates are stored in Redis
* Available for all processes

!SLIDE ruby

# Sharing data #

    @@@ ruby
    # Process 1
    @redis.setnx("a_secret", "message")
    
    # Process 2
    @redis.get("a_secret")

!SLIDE bullets incremental

# Sharing data is useful for... #

* Feature flipping
* Central and dynamic configuration
* Additional (and simple) object meta data

!SLIDE

# Examples #
## Worker queues ##

!SLIDE bullets incremental

# Resque #

* A worker queue for Ruby based on Redis
* Jobs are pushed to and popped off a list ("queue")

!SLIDE ruby

# Worker #

    @@@ ruby
    class Consumer
      @queue = :critical

      def self.perform(*args)
        args.each do |produce|
          puts "Consuming #{produce}"
        end 
      end 
    end

!SLIDE ruby

# Producer #

    @@@ ruby
    Resque.enqueue(Consumer, 'nutella', 'vegemite')
