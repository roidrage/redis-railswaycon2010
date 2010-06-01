!SLIDE

# The Data Structures #
## ...and some of their commands ##

!SLIDE

# Strings #

## GET, SET ##

!SLIDE bullets

* Set if not exists (SETNX)
* Increment/Decrement for Integers (INCR, DECR)
* Append to a string (APPEND)

!SLIDE

# Lists #

## RPUSH, LPOP, LRANGE, LLEN ##

!SLIDE bullets

* Atomic push and pop
* Blocking pop
* Range queries

!SLIDE

# Sets #

## SADD, SREM, SMEMBERS, SISMEMBER ##

!SLIDE bullets

* Unions,
* Diffs,
* Intersections between Sets

!SLIDE

# Sorted Sets #

## ZADD, ZRANGE, ZRANGEBYSCORE ##

!SLIDE

# Hashes #

## HSET, HGET, HKEYS, HVALS ##

!SLIDE

# Beyond Data Structures #

!SLIDE

# Publish/Subscribe #

    SUBSCRIBE swiss.army.gear
    PSUBSCRIBE swiss.army.*

    PUBLISH swiss.army.gear knife

!SLIDE

# Atomic Transactions #

    MULTI

    SET key value
    APPEND key moar
    LPUSH my_keys key

    EXEC
