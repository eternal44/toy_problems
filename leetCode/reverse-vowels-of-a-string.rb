def reverse_vowels(s)
  count = 0

  vowelArr = s.split('').inject([]) do |memo, letter|

    if letter.match(/[aeiou]/)
      memo.push(count)
    end
    count += 1

    memo
  end

  for index in 0..((vowelArr.length - 1) / 2).floor

    beginning_vowel = vowelArr[index]
    ending_vowel = vowelArr[vowelArr.length - index - 1]

    temp = s[beginning_vowel]
    s[beginning_vowel] = s[ending_vowel]
    s[ending_vowel] = temp
  end

  s
end


s = "hello"

s1 = "leetcode"

puts reverse_vowels(s) # holle
puts reverse_vowels(s1) # leotcede

