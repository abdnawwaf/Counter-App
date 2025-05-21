let count = 0;

const Count = document.getElementById("Count");
const IncreasesBtn = document.getElementById("IncreasesBtn");
const DecreasesBtn = document.getElementById("DecreasesBtn");
const ResetBtn = document.getElementById("ResetBtn");

IncreasesBtn.onclick = function () {
  count++;
  Count.innerText = count;
};

DecreasesBtn.onclick = function () {
  if (count > 0) {
    count--;
  }
  Count.innerText = count;
};

ResetBtn.onclick = function () {
  count = 0;
  Count.innerText = count;
};
