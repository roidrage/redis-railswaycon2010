require 'rubygems'
require 'resque'
require 'consumer'

Resque.enqueue(Consumer, 'nutella', 'vegemite')
