!SLIDE ruby center

# Using Redis with Ruby #

    @@@ ruby
    require 'redis'

    r = Redis.new

!SLIDE

## [Redis library](http://github.com/ezmobius/redis-rb) is close to the metal ##

!SLIDE

## Most methods conform to the Redis command set ##

!SLIDE ruby

## Setting and getting values ##

    @@@ ruby
    r.set("a_secret", "message")
    r["a_secret"] = "message"

    r.get("a_secret")
    r["a_secret"]
    # => "message"

!SLIDE ruby

## Working with lists ##

    @@@ ruby
    r.lpush("list", "value")

    r.lrange("list", 0, -1)
    # => ["value"]

    r.rpop("list")
    # => "value"

!SLIDE ruby

## Working with sets ##

    @@@ ruby
    r.sadd("set", "member")
    
    r.sismember("set", "member")
    # => true

    r.smembers("set")
    # ["member"]

!SLIDE ruby

## Working with sorted sets ##

    @@@ ruby
    r.zadd("sorted", 1, "low")
    r.zadd("sorted", 2, "high")

    r.zrange("sorted", 0, -1,
             :withscores => true)

    r.zrangebyscore("sorted", 0, 100)

!SLIDE ruby

## Working with hashes ##

    @@@ ruby
    r.hset("hash", "key", "value")

    r.hgetall("hash")
    # => {"key"=>"value"}

!SLIDE

# And so on... #

### For a full list of available commands, see ###

### <http://code.google.com/p/redis/wiki/CommandReference> ###

!SLIDE ruby

## More Ruby-like: [redis-objects](http://github.com/nateware/redis-objects) ##

    @@@ ruby

    set = Redis::Set.new("set")
    set << "member"
    set.each do |m|
      puts m
    end

!SLIDE ruby

# Store objects with [Ohm](http://github.com/soveran/ohm) #

    @@@ ruby
    class User < Ohm::Model
      attribute :name
      collection :comments, Comment
    end
    
    User.create(:name => "Salvatore")

    User.find(:name => "Salvatore")

!SLIDE ruby

## But I don't do that. ##
