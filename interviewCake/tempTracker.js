var TempTracker = function() {
  this.tempsMap = {}

  this.mode = null
  this.mean = null
  this.max = null
  this.min = null
  this.total = 0
  this.count = 0
  this.maxOccurrence = 0
}

TempTracker.prototype.insert = function(temp) {
  this.max = Math.max(temp, this.max)
  this.min = Math.min(temp, this.min)
  this.count++
  this.total += temp
  this.mean = this.total / this.count

  if(this.tempsMap[temp] > this.maxOccurrence) {
    this.maxOccurrence += 1
    this.mode = temp 
  }

  if(this.tempsMap[temp]) 
    this.tempsMap[temp]++
  else 
    this.tempsMap[temp] = 1
}

TempTracker.prototype.getMean = function() {
  return this.mean
}

TempTracker.prototype.getMode = function() {
  return this.mode
}

TempTracker.prototype.getMax = function() {
  return this.max
}

TempTracker.prototype.getMin = function() {
  return this.min
}

var tempTracker1 = new TempTracker()
tempTracker1.insert(20)
tempTracker1.insert(10)
tempTracker1.insert(30)
tempTracker1.insert(30)
tempTracker1.insert(20)
console.log(tempTracker1.getMax())
