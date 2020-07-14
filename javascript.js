var value = "aa"
localStorage.setItem("testKey", value);
var test = localStorage.getItem("testKey");
alert(test);
<form>
  <label>Mortgage Amount</label>
  <input type="text" id="amount">
  <label>Interest Rate % </label>
  <input type="text" id="interest">
  <label>Mortgage Period (Years)</label>
  <input type="text" id="period">
  <input type="button" value="Submit" id="btn">
  <input type="button" value="GetLocalStorage" id="localbtn">
</form>
         <script>
$(document).ready(function () {

  $("#btn").click(function () {

      var principal = $("#amount").val();
      var interest = $("#interest").val();
      var years = $("#period").val();
      var item = [];
     item.push(principal,interest,years);
     localStorage.item += JSON.stringify({ "principalAmount": principal, "interestAmount": interest, "Period": years });


  });