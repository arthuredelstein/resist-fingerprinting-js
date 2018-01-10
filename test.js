const testResultsDiv = document.getElementById("test_results");

const is = function(a, b, description) {
  const div = document.createElement("div");
  const pass = (a === b);
  div.innerText = `${pass ? "PASS" : "FAIL"}: ${description}, [${a}, ${b}]`;
  div.setAttribute("class", pass ? "test_pass" : "test_fail");
  testResultsDiv.appendChild(div);
}

const is_rounded_time = function (t, description) {
  is(100 * Math.round(t/100), t, description);
};

const test_performance = function () {
  const now = performance.now();
  is_rounded_time(now, "performance.now() is rounded to nearest 100 ms.");
  const now2 = Performance.prototype.now.apply(performance);
  is_rounded_time(now2, "performance.now() via prototype is rounded to nearest 100 ms.");
};

const test_screenXY = function () {
  is(window.screenX, 0, "screenX is 0.");
  is(window.screenY, 0, "screenY is 0.");
};

const test_mouse_event = function () {
  const clientX = 10, clientY = 20;
  const event = new MouseEvent("click", { clientX, clientY });
  is(event.screenX, clientX, "screenX matches clientX");
  is(event.screenY, clientY, "screenY matches clientY");
  is_rounded_time(event.timeStamp, "MouseEvent.timeStamp is rounded");
};

const run_tests = async function () {
  test_performance();
  test_screenXY();
  test_mouse_event();
};

run_tests();
