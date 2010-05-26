require 'rubygems'
require 'resque'

class Consumer
  @queue = :critical

  def self.perform(*args)
    args.each do |produce|
      puts "Consuming produce"
    end
    puts "Now I'm tired, sleep!"
    sleep 10
  end
end
