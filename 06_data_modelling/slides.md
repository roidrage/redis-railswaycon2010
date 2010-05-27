!SLIDE

# Data Modelling #

!SLIDE

# How do I get my data into Redis? #

!SLIDE

# It Depends™ #

!SLIDE

# The Use Case is important #

!SLIDE

# Read vs. Write Patterns #

!SLIDE

# Data Duplication is acceptable #
## ...if it improves accessibility. ##

!SLIDE

# A simple example #

!SLIDE

# Daily view statistics #

!SLIDE center

## Sorted set for views per day, e.g #

    views:2010-06-02

!SLIDE center

## A URL was hit ##

    ZINCRBY views:2010-06-02 1 /home

!SLIDE center

# Done! #
## ...and already sorted by number of hits. ##

!SLIDE center

# Getting them out again: #

    ZRANGE views:2010-06-02 0 -1 WITHSCORES

!SLIDE center

# The same can be done with hashes. #

    HINCRBY views:daily:/home 2010-06-02 1

!SLIDE center

# Caveat: No sorting possible #

!SLIDE center

# Add a total count for a page. #

    INCR views:total:/home

!SLIDE center

# And a monthly count. #

    INCR views:by_month:2010-06:/home

!SLIDE center

# Reverse lookup is king in Redis #

!SLIDE center

## E.g. store a set of all pages tracked in a month. ##

    SADD views:tracked_pages:2010-06 /home

!SLIDE center

## And a set of tracked months. ##

    SADD views:tracked_months 2010-06

!SLIDE small

## Fetch total counts for tracked months and pages. ##

    for month in smembers('views:tracked_months')
      for page in smembers("views:tracked_pages:#{month}")
        print redis.get("views:by_month:#{month}:#{page}")
      end
    end

!SLIDE

# Why all that duplication? #

!SLIDE bullets incremental

* Searching for keys is expensive
* But storing some extra data isn't

!SLIDE bullets incremental

* The more diverse your read patterns
* The more reverse lookups are required
