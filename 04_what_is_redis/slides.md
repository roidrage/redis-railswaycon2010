!SLIDE

# What is Redis? #

!SLIDE

> Redis is like Memcached, only awesome.

<p class="caption">Me, September 2009</p>

!SLIDE

> Redis is the Swiss Army knife of data storage.

<p class="caption">Me, Today</p>

!SLIDE

## Simpler: Redis is a key-value database ##

!SLIDE

## Even better: A data structure server. ##

!SLIDE

## More than storing simple keys and values. ##

!SLIDE

# Jolly, it's fast! #

!SLIDE

## Trimmed for high read/write performance. ##

!SLIDE

## Several 10000 reads/writes per second. ##

!SLIDE

## Simple, text-based protocol ##

!SLIDE commandline 

    $ telnet localhost 6379

    SET redis 7      
    awesome
    +OK

    GET redis
    $7
    awesome

!SLIDE

### Written by Salvatore Sanfilippo, now working for VMware ###