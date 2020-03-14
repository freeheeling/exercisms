=begin
Write your code for the 'Matrix' exercise in this file. Make the tests in
`matrix_test.rb` pass.

To get started with TDD, see the `README.md` file in your
`ruby/matrix` directory.
=end
class Matrix
  attr_reader :string

  def initialize(string)
    @string = string
  end

  def rows
    string.split(/\n+/).map do |nums|
      nums.split.map do |num|
        num.to_i
      end
    end
  end

  def columns
    rows.transpose
  end
end
