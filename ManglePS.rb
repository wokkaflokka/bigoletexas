#!/usr/bin/env ruby

################################################
#
# A very crude script that parses a very specific
# PostScript file in order to draw the shape of Texas in 
# Java. Outputs all necessary coordinates, and the 
# appropriate command sequence to recreate the drawing
#
################################################

file = 'ManglePS.tmp'

max_x = 860.0
max_y = 880.0

commands = []
xs = []
ys = []
mx, my = nil
lx, ly = nil

cx1,cx2,cx3 = nil
cy1,cy2,cy3 = nil

File.open(file,'r').each_line do |line|
  t = line.chomp("\n")
  if t.include?('move')
    temp = t.split(' ')
    mx   = temp[0]
    my   = temp[1]
    commands << 'moveTo'
    xs << mx
    ys << my
  elsif t.include?('line')
    temp = t.split(' ')
    lx   = temp[0]
    ly   = temp[1]
    commands << 'lineTo'
    xs << lx
    ys << ly
  elsif t.include?('curve')
    temp = t.split(' ')
    cx1  = temp[0]
    cy1  = temp[1]
    cx2  = temp[2]
    cy2  = temp[3]
    cx3  = temp[4]
    cy3  = temp[5]
    commands << 'curveTo'
    xs << cx1
    xs << cx2
    xs << cx3
    ys << cy1
    ys << cy2
    ys << cy3
  end
end

# Not for x, only for y
# xs.map! { |item| max_x - item.to_f }
ys.map! { |item| max_y - item.to_f }

xstring = 'double xPoints[] = {'
ystring = 'double yPoints[] = {'
max = xs.size
xs.each_with_index do |x,i|
  xstring << "#{x}, " unless i == (max -1)
  xstring << "#{x}" if i == (max -1)
end
xstring << '};'
ystring = 'int yPoints[] = {'
max = ys.size
ys.each_with_index do |y,i|
  ystring << "#{y}, " unless i == (max -1)
  ystring << "#{y}" if i == (max -1)
end
ystring << '};'

i = 0
File.open('java-strings.tmp','w') do |file|
  file.write(xstring + "\n\n")
  file.write(ystring + "\n\n")
  commands.each do |command|
    if command.include?('curve')
      file.write("texas.curveTo(xPoints[#{i}],yPoints[#{i}],xPoints[#{i+1}],yPoints[#{i+1}],xPoints[#{i+2}],yPoints[#{i+2}]);\n")
      i += 2
    elsif command.include?('line')
      file.write("texas.lineTo(xPoints[#{i}],yPoints[#{i}]);\n")
    else
      file.write("texas.moveTo(xPoints[#{i}],yPoints[#{i}]);\n")
    end
    i += 1
  end
end

exit(0)
