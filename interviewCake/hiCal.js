function mergeSort (arr) {
  if(arr.length === 1)
    return arr

  var midpoint = Math.floor(arr.length / 2)
  var left = arr.slice(0, midpoint)
  var right = arr.slice(midpoint)

  return merge(mergeSort(left), mergeSort(right))
}

function merge(arr1, arr2) {
  var mergedArr = []
  var i = 0
  var j = 0

  while(i < arr1.length && j < arr2.length) {
    mergedArr.push(arr1[i].startTime < arr2[j].startTime ? arr1[i++] : arr2[j++])
  }

  // concat left over value in arr1 or arr2
  return i < arr1.length ? mergedArr.concat(arr1.slice(i)) : mergedArr.concat(arr2.slice(j))
}

function condenseMeetings(meetings) {
  var meetings = mergeSort(meetings)
  var condensedMeeting = [meetings[0]]

  for (var i = 1; i < meetings.length; i++) {
    var currentMeeting = meetings[i]
    var lastMergedMeeting = condensedMeeting[condensedMeeting.length - 1]

    if(currentMeeting.startTime <= lastMergedMeeting.endTime) {
      lastMergedMeeting.endTime = Math.max(currentMeeting.endTime, lastMergedMeeting.endTime)
    } else {
      condensedMeeting.push(currentMeeting)
    }
  }

  return condensedMeeting
}

console.log(condenseMeetings(
  [
    {startTime: 0,  endTime: 1},
    {startTime: 3,  endTime: 5},
    {startTime: 4,  endTime: 8},
    {startTime: 10, endTime: 12},
    {startTime: 9,  endTime: 10}
  ]
)) // {startTime: 1, endTime: 6}

// console.log(mergeSort([8,7,3,6,9,2,4,5,1]))
// console.log(mergeSort([8]))
