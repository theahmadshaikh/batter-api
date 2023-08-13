const batteryLevel = document.querySelector(".batteryLevel");
const batteryCharging = document.querySelector(".batteryCharging");
const batteryChargingTime = document.querySelector(".batteryChargingTime");
const batteryDisChargingTime = document.querySelector(
  ".batteryDisChargingTime"
);

const battery=()=>{
  if("getBattery" in navigator)
  {
    navigator.getBattery().then((battery)=>{
      (function (){
        updateChargingChange();
        updateLevelChange();
        updateDischargingTimeChange();
        updateChargingTimeChange();
      })();
      
      function updateChargingChange()
      {
        batteryCharging.textContent=  battery.charging?"Yes":"No";
      }

      function updateLevelChange()
      {
        batteryLevel.textContent = battery.level*100+" %";
      }

      function updateDischargingTimeChange()
      {
        batteryDisChargingTime.textContent = Math.floor(battery.dischargingTime/3600)+" Minutes";
      }

      function updateChargingTimeChange()
      {
        batteryChargingTime.textContent = battery.chargingTime;
      }

      battery.addEventListener("chargingchange",()=>{
        updateChargingChange();
      });
      
      battery.addEventListener("levelchange",()=>{
        updateLevelChange();
      });
      
      battery.addEventListener("dischargingtimechange",()=>{
        updateDischargingTimeChange();
      });
      battery.addEventListener("chargingtimechange",()=>{
        updateChargingTimeChange();
      })
      
      
    })
  }
}
battery();