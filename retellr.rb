require 'pry'

prompt = 'Who are you in this convo? '
print prompt
user = STDIN.gets.chomp
puts '-------------'

text = File.open('chat.txt')

bullshit = [
  "-- are you kidding me?",
  "-- whaaaaaat?",
  "-- that's crazy!",
  "-- really??? Like... seriously???",
  "--- totes"
]

me = [
  "I was all like",
  "Then I said",
  "What happened then... I said something like"
]

def random_bullshit(bullshit)
  bullshit.sample if rand > 0.6
end

def random_me(me)
  me.sample
end

text.each do |line|
  line = line[20..-1]
  name, msg = line.split(/:/)
  if name == user
    puts "#{random_me(me)} #{msg} #{random_bullshit(bullshit)}"
  else
    puts "#{name} was all like #{msg} #{random_bullshit(bullshit)}"
  end
end


