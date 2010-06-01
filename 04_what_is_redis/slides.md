!SLIDE

# What is Redis? #

!SLIDE

> Redis is like Memcached, only awesome.

<p class="caption">Me, September 2009</p>

!SLIDE

> Redis is the Swiss Army knife of data storage.

<p class="caption">Me, June 2010</p>

!SLIDE

## Simpler: Redis is a key-value database. ##

!SLIDE

## Even better: A data structure server. ##

!SLIDE

## More than storing simple keys and values. ##

!SLIDE center

![Jolly, it's fast!](fast.jpg)

!SLIDE

## Trimmed for high read/write performance. ##

!SLIDE incremental

## Several 10000 reads/writes per second ##
## (and client). ##

!SLIDE

![Redis is a hero!](superhero.jpg)

!SLIDE

## All data is kept in memory. ##

!SLIDE bullets incremental

# But! #

* Redis 2.0 has virtual memory
* Data can be swapped to disk

!SLIDE

## Simple, text-based protocol. ##

!SLIDE commandline 

    $ telnet localhost 6379

    SET redis 7      
    awesome
    +OK

    GET redis
    $7
    awesome

!SLIDE

### Written by [Salvatore Sanfilippo](http://twitter.com/antirez), now working for VMware ###
