class ResistorColorDuo
  def self.value(colors = [])
    bands = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white']
    colors.take(2).map do |color|
      bands.index(color)
    end.join.to_i
  end
end
