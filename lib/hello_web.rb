require 'sinatra'

get('/hello') do
  'hello, world!'
end

get('/bye') do
  'goodbye, world!'
end

get('/salut') do
  'salut, world!'
end