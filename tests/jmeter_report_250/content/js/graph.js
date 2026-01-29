/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 314.0, "minX": 0.0, "maxY": 26768.0, "series": [{"data": [[0.0, 314.0], [0.1, 314.0], [0.2, 314.0], [0.3, 314.0], [0.4, 329.0], [0.5, 329.0], [0.6, 329.0], [0.7, 329.0], [0.8, 329.0], [0.9, 329.0], [1.0, 329.0], [1.1, 329.0], [1.2, 329.0], [1.3, 330.0], [1.4, 330.0], [1.5, 330.0], [1.6, 340.0], [1.7, 340.0], [1.8, 340.0], [1.9, 340.0], [2.0, 362.0], [2.1, 362.0], [2.2, 362.0], [2.3, 362.0], [2.4, 409.0], [2.5, 409.0], [2.6, 409.0], [2.7, 409.0], [2.8, 440.0], [2.9, 440.0], [3.0, 440.0], [3.1, 440.0], [3.2, 476.0], [3.3, 476.0], [3.4, 476.0], [3.5, 476.0], [3.6, 503.0], [3.7, 503.0], [3.8, 503.0], [3.9, 503.0], [4.0, 519.0], [4.1, 519.0], [4.2, 519.0], [4.3, 519.0], [4.4, 525.0], [4.5, 525.0], [4.6, 525.0], [4.7, 525.0], [4.8, 579.0], [4.9, 579.0], [5.0, 579.0], [5.1, 579.0], [5.2, 582.0], [5.3, 582.0], [5.4, 582.0], [5.5, 582.0], [5.6, 582.0], [5.7, 600.0], [5.8, 600.0], [5.9, 600.0], [6.0, 600.0], [6.1, 603.0], [6.2, 603.0], [6.3, 603.0], [6.4, 603.0], [6.5, 606.0], [6.6, 606.0], [6.7, 606.0], [6.8, 606.0], [6.9, 614.0], [7.0, 614.0], [7.1, 614.0], [7.2, 614.0], [7.3, 652.0], [7.4, 652.0], [7.5, 652.0], [7.6, 652.0], [7.7, 652.0], [7.8, 652.0], [7.9, 652.0], [8.0, 652.0], [8.1, 656.0], [8.2, 656.0], [8.3, 656.0], [8.4, 656.0], [8.5, 657.0], [8.6, 657.0], [8.7, 657.0], [8.8, 657.0], [8.9, 676.0], [9.0, 676.0], [9.1, 676.0], [9.2, 676.0], [9.3, 676.0], [9.4, 676.0], [9.5, 676.0], [9.6, 676.0], [9.7, 684.0], [9.8, 684.0], [9.9, 684.0], [10.0, 684.0], [10.1, 711.0], [10.2, 711.0], [10.3, 711.0], [10.4, 711.0], [10.5, 719.0], [10.6, 719.0], [10.7, 719.0], [10.8, 719.0], [10.9, 727.0], [11.0, 727.0], [11.1, 727.0], [11.2, 727.0], [11.3, 730.0], [11.4, 730.0], [11.5, 730.0], [11.6, 730.0], [11.7, 756.0], [11.8, 756.0], [11.9, 756.0], [12.0, 756.0], [12.1, 788.0], [12.2, 788.0], [12.3, 788.0], [12.4, 788.0], [12.5, 795.0], [12.6, 795.0], [12.7, 795.0], [12.8, 795.0], [12.9, 805.0], [13.0, 805.0], [13.1, 805.0], [13.2, 805.0], [13.3, 827.0], [13.4, 827.0], [13.5, 827.0], [13.6, 827.0], [13.7, 883.0], [13.8, 883.0], [13.9, 883.0], [14.0, 883.0], [14.1, 990.0], [14.2, 990.0], [14.3, 990.0], [14.4, 990.0], [14.5, 1014.0], [14.6, 1014.0], [14.7, 1014.0], [14.8, 1014.0], [14.9, 1019.0], [15.0, 1019.0], [15.1, 1019.0], [15.2, 1019.0], [15.3, 1054.0], [15.4, 1054.0], [15.5, 1054.0], [15.6, 1054.0], [15.7, 1078.0], [15.8, 1078.0], [15.9, 1078.0], [16.0, 1078.0], [16.1, 1093.0], [16.2, 1093.0], [16.3, 1093.0], [16.4, 1093.0], [16.5, 1103.0], [16.6, 1103.0], [16.7, 1103.0], [16.8, 1103.0], [16.9, 1153.0], [17.0, 1153.0], [17.1, 1153.0], [17.2, 1153.0], [17.3, 1221.0], [17.4, 1221.0], [17.5, 1221.0], [17.6, 1412.0], [17.7, 1412.0], [17.8, 1412.0], [17.9, 1412.0], [18.0, 1784.0], [18.1, 1784.0], [18.2, 1784.0], [18.3, 1784.0], [18.4, 2014.0], [18.5, 2014.0], [18.6, 2014.0], [18.7, 2014.0], [18.8, 2404.0], [18.9, 2404.0], [19.0, 2404.0], [19.1, 2404.0], [19.2, 4185.0], [19.3, 4185.0], [19.4, 4185.0], [19.5, 4185.0], [19.6, 4329.0], [19.7, 4329.0], [19.8, 4329.0], [19.9, 4329.0], [20.0, 4388.0], [20.1, 4388.0], [20.2, 4388.0], [20.3, 4388.0], [20.4, 4453.0], [20.5, 4453.0], [20.6, 4453.0], [20.7, 4453.0], [20.8, 4604.0], [20.9, 4604.0], [21.0, 4604.0], [21.1, 4604.0], [21.2, 4725.0], [21.3, 4725.0], [21.4, 4725.0], [21.5, 4725.0], [21.6, 5542.0], [21.7, 5542.0], [21.8, 5542.0], [21.9, 5542.0], [22.0, 8015.0], [22.1, 8015.0], [22.2, 8015.0], [22.3, 8015.0], [22.4, 8575.0], [22.5, 8575.0], [22.6, 8575.0], [22.7, 8575.0], [22.8, 8716.0], [22.9, 8716.0], [23.0, 8716.0], [23.1, 8716.0], [23.2, 9360.0], [23.3, 9360.0], [23.4, 9360.0], [23.5, 9360.0], [23.6, 9432.0], [23.7, 9432.0], [23.8, 9432.0], [23.9, 9432.0], [24.0, 9589.0], [24.1, 9589.0], [24.2, 9589.0], [24.3, 9589.0], [24.4, 10551.0], [24.5, 10551.0], [24.6, 10551.0], [24.7, 10551.0], [24.8, 10616.0], [24.9, 10616.0], [25.0, 10616.0], [25.1, 10616.0], [25.2, 10697.0], [25.3, 10697.0], [25.4, 10697.0], [25.5, 10697.0], [25.6, 10827.0], [25.7, 10827.0], [25.8, 10827.0], [25.9, 10827.0], [26.0, 11034.0], [26.1, 11034.0], [26.2, 11034.0], [26.3, 11034.0], [26.4, 11107.0], [26.5, 11107.0], [26.6, 11107.0], [26.7, 11107.0], [26.8, 11188.0], [26.9, 11188.0], [27.0, 11188.0], [27.1, 11188.0], [27.2, 11245.0], [27.3, 11245.0], [27.4, 11245.0], [27.5, 11245.0], [27.6, 11752.0], [27.7, 11752.0], [27.8, 11752.0], [27.9, 11752.0], [28.0, 11821.0], [28.1, 11821.0], [28.2, 11821.0], [28.3, 11821.0], [28.4, 11891.0], [28.5, 11891.0], [28.6, 11891.0], [28.7, 11891.0], [28.8, 11955.0], [28.9, 11955.0], [29.0, 11955.0], [29.1, 11955.0], [29.2, 12033.0], [29.3, 12033.0], [29.4, 12033.0], [29.5, 12033.0], [29.6, 12072.0], [29.7, 12072.0], [29.8, 12072.0], [29.9, 12072.0], [30.0, 12105.0], [30.1, 12105.0], [30.2, 12105.0], [30.3, 12105.0], [30.4, 12195.0], [30.5, 12195.0], [30.6, 12195.0], [30.7, 12195.0], [30.8, 12264.0], [30.9, 12264.0], [31.0, 12264.0], [31.1, 12264.0], [31.2, 12347.0], [31.3, 12347.0], [31.4, 12347.0], [31.5, 12347.0], [31.6, 12419.0], [31.7, 12419.0], [31.8, 12419.0], [31.9, 12419.0], [32.0, 12826.0], [32.1, 12826.0], [32.2, 12826.0], [32.3, 12826.0], [32.4, 12844.0], [32.5, 12844.0], [32.6, 12844.0], [32.7, 12844.0], [32.8, 12917.0], [32.9, 12917.0], [33.0, 12917.0], [33.1, 12917.0], [33.2, 12974.0], [33.3, 12974.0], [33.4, 12974.0], [33.5, 12974.0], [33.6, 13023.0], [33.7, 13023.0], [33.8, 13023.0], [33.9, 13023.0], [34.0, 13096.0], [34.1, 13096.0], [34.2, 13096.0], [34.3, 13096.0], [34.4, 13170.0], [34.5, 13170.0], [34.6, 13170.0], [34.7, 13170.0], [34.8, 13249.0], [34.9, 13249.0], [35.0, 13249.0], [35.1, 13249.0], [35.2, 13280.0], [35.3, 13280.0], [35.4, 13280.0], [35.5, 13280.0], [35.6, 13340.0], [35.7, 13340.0], [35.8, 13340.0], [35.9, 13340.0], [36.0, 13416.0], [36.1, 13416.0], [36.2, 13416.0], [36.3, 13416.0], [36.4, 13417.0], [36.5, 13417.0], [36.6, 13417.0], [36.7, 13417.0], [36.8, 13495.0], [36.9, 13495.0], [37.0, 13495.0], [37.1, 13495.0], [37.2, 13562.0], [37.3, 13562.0], [37.4, 13562.0], [37.5, 13562.0], [37.6, 13612.0], [37.7, 13612.0], [37.8, 13612.0], [37.9, 13612.0], [38.0, 13650.0], [38.1, 13650.0], [38.2, 13650.0], [38.3, 13650.0], [38.4, 13677.0], [38.5, 13677.0], [38.6, 13677.0], [38.7, 13677.0], [38.8, 13814.0], [38.9, 13814.0], [39.0, 13814.0], [39.1, 13814.0], [39.2, 13871.0], [39.3, 13871.0], [39.4, 13871.0], [39.5, 13871.0], [39.6, 13966.0], [39.7, 13966.0], [39.8, 13966.0], [39.9, 13966.0], [40.0, 14045.0], [40.1, 14045.0], [40.2, 14045.0], [40.3, 14045.0], [40.4, 14121.0], [40.5, 14121.0], [40.6, 14121.0], [40.7, 14121.0], [40.8, 14262.0], [40.9, 14262.0], [41.0, 14262.0], [41.1, 14262.0], [41.2, 14319.0], [41.3, 14319.0], [41.4, 14319.0], [41.5, 14319.0], [41.6, 14342.0], [41.7, 14342.0], [41.8, 14342.0], [41.9, 14342.0], [42.0, 14347.0], [42.1, 14347.0], [42.2, 14347.0], [42.3, 14347.0], [42.4, 14364.0], [42.5, 14364.0], [42.6, 14364.0], [42.7, 14364.0], [42.8, 14389.0], [42.9, 14389.0], [43.0, 14389.0], [43.1, 14389.0], [43.2, 14436.0], [43.3, 14436.0], [43.4, 14436.0], [43.5, 14436.0], [43.6, 14464.0], [43.7, 14464.0], [43.8, 14464.0], [43.9, 14464.0], [44.0, 14513.0], [44.1, 14513.0], [44.2, 14513.0], [44.3, 14513.0], [44.4, 14538.0], [44.5, 14538.0], [44.6, 14538.0], [44.7, 14538.0], [44.8, 14589.0], [44.9, 14589.0], [45.0, 14589.0], [45.1, 14589.0], [45.2, 14634.0], [45.3, 14634.0], [45.4, 14634.0], [45.5, 14634.0], [45.6, 14657.0], [45.7, 14657.0], [45.8, 14657.0], [45.9, 14657.0], [46.0, 14664.0], [46.1, 14664.0], [46.2, 14664.0], [46.3, 14664.0], [46.4, 14686.0], [46.5, 14686.0], [46.6, 14686.0], [46.7, 14686.0], [46.8, 14707.0], [46.9, 14707.0], [47.0, 14707.0], [47.1, 14707.0], [47.2, 14739.0], [47.3, 14739.0], [47.4, 14739.0], [47.5, 14739.0], [47.6, 14746.0], [47.7, 14746.0], [47.8, 14746.0], [47.9, 14746.0], [48.0, 14785.0], [48.1, 14785.0], [48.2, 14785.0], [48.3, 14785.0], [48.4, 14823.0], [48.5, 14823.0], [48.6, 14823.0], [48.7, 14823.0], [48.8, 14854.0], [48.9, 14854.0], [49.0, 14854.0], [49.1, 14854.0], [49.2, 14904.0], [49.3, 14904.0], [49.4, 14904.0], [49.5, 14904.0], [49.6, 14924.0], [49.7, 14924.0], [49.8, 14924.0], [49.9, 14924.0], [50.0, 14999.0], [50.1, 14999.0], [50.2, 14999.0], [50.3, 14999.0], [50.4, 15051.0], [50.5, 15051.0], [50.6, 15051.0], [50.7, 15051.0], [50.8, 15089.0], [50.9, 15089.0], [51.0, 15089.0], [51.1, 15089.0], [51.2, 15122.0], [51.3, 15122.0], [51.4, 15122.0], [51.5, 15122.0], [51.6, 15161.0], [51.7, 15161.0], [51.8, 15161.0], [51.9, 15161.0], [52.0, 15163.0], [52.1, 15163.0], [52.2, 15163.0], [52.3, 15163.0], [52.4, 15217.0], [52.5, 15217.0], [52.6, 15217.0], [52.7, 15217.0], [52.8, 15230.0], [52.9, 15230.0], [53.0, 15230.0], [53.1, 15230.0], [53.2, 15232.0], [53.3, 15232.0], [53.4, 15232.0], [53.5, 15232.0], [53.6, 15291.0], [53.7, 15291.0], [53.8, 15291.0], [53.9, 15291.0], [54.0, 15294.0], [54.1, 15294.0], [54.2, 15294.0], [54.3, 15294.0], [54.4, 15300.0], [54.5, 15300.0], [54.6, 15300.0], [54.7, 15300.0], [54.8, 15362.0], [54.9, 15362.0], [55.0, 15362.0], [55.1, 15362.0], [55.2, 15370.0], [55.3, 15370.0], [55.4, 15370.0], [55.5, 15370.0], [55.6, 15373.0], [55.7, 15373.0], [55.8, 15373.0], [55.9, 15373.0], [56.0, 15438.0], [56.1, 15438.0], [56.2, 15438.0], [56.3, 15438.0], [56.4, 15526.0], [56.5, 15526.0], [56.6, 15526.0], [56.7, 15526.0], [56.8, 15595.0], [56.9, 15595.0], [57.0, 15595.0], [57.1, 15595.0], [57.2, 15643.0], [57.3, 15643.0], [57.4, 15643.0], [57.5, 15643.0], [57.6, 15683.0], [57.7, 15683.0], [57.8, 15683.0], [57.9, 15683.0], [58.0, 15718.0], [58.1, 15718.0], [58.2, 15718.0], [58.3, 15718.0], [58.4, 15757.0], [58.5, 15757.0], [58.6, 15757.0], [58.7, 15757.0], [58.8, 15796.0], [58.9, 15796.0], [59.0, 15796.0], [59.1, 15796.0], [59.2, 15835.0], [59.3, 15835.0], [59.4, 15835.0], [59.5, 15835.0], [59.6, 15865.0], [59.7, 15865.0], [59.8, 15865.0], [59.9, 15865.0], [60.0, 15905.0], [60.1, 15905.0], [60.2, 15905.0], [60.3, 15905.0], [60.4, 15966.0], [60.5, 15966.0], [60.6, 15966.0], [60.7, 15966.0], [60.8, 16043.0], [60.9, 16043.0], [61.0, 16043.0], [61.1, 16043.0], [61.2, 16061.0], [61.3, 16061.0], [61.4, 16061.0], [61.5, 16061.0], [61.6, 16119.0], [61.7, 16119.0], [61.8, 16119.0], [61.9, 16119.0], [62.0, 16139.0], [62.1, 16139.0], [62.2, 16139.0], [62.3, 16139.0], [62.4, 16191.0], [62.5, 16191.0], [62.6, 16191.0], [62.7, 16191.0], [62.8, 16243.0], [62.9, 16243.0], [63.0, 16243.0], [63.1, 16243.0], [63.2, 16243.0], [63.3, 16243.0], [63.4, 16243.0], [63.5, 16243.0], [63.6, 16258.0], [63.7, 16258.0], [63.8, 16258.0], [63.9, 16258.0], [64.0, 16264.0], [64.1, 16264.0], [64.2, 16264.0], [64.3, 16264.0], [64.4, 16299.0], [64.5, 16299.0], [64.6, 16299.0], [64.7, 16299.0], [64.8, 16327.0], [64.9, 16327.0], [65.0, 16327.0], [65.1, 16327.0], [65.2, 16364.0], [65.3, 16364.0], [65.4, 16364.0], [65.5, 16364.0], [65.6, 16408.0], [65.7, 16408.0], [65.8, 16408.0], [65.9, 16408.0], [66.0, 16435.0], [66.1, 16435.0], [66.2, 16435.0], [66.3, 16435.0], [66.4, 16460.0], [66.5, 16460.0], [66.6, 16460.0], [66.7, 16460.0], [66.8, 16496.0], [66.9, 16496.0], [67.0, 16496.0], [67.1, 16496.0], [67.2, 16511.0], [67.3, 16511.0], [67.4, 16511.0], [67.5, 16511.0], [67.6, 16514.0], [67.7, 16514.0], [67.8, 16514.0], [67.9, 16514.0], [68.0, 16550.0], [68.1, 16550.0], [68.2, 16550.0], [68.3, 16550.0], [68.4, 16581.0], [68.5, 16581.0], [68.6, 16581.0], [68.7, 16581.0], [68.8, 16590.0], [68.9, 16590.0], [69.0, 16590.0], [69.1, 16590.0], [69.2, 16644.0], [69.3, 16644.0], [69.4, 16644.0], [69.5, 16644.0], [69.6, 16656.0], [69.7, 16656.0], [69.8, 16656.0], [69.9, 16656.0], [70.0, 16670.0], [70.1, 16670.0], [70.2, 16670.0], [70.3, 16670.0], [70.4, 16726.0], [70.5, 16726.0], [70.6, 16726.0], [70.7, 16726.0], [70.8, 16816.0], [70.9, 16816.0], [71.0, 16816.0], [71.1, 16816.0], [71.2, 16818.0], [71.3, 16818.0], [71.4, 16818.0], [71.5, 16818.0], [71.6, 16899.0], [71.7, 16899.0], [71.8, 16899.0], [71.9, 16899.0], [72.0, 16981.0], [72.1, 16981.0], [72.2, 16981.0], [72.3, 16981.0], [72.4, 17022.0], [72.5, 17022.0], [72.6, 17022.0], [72.7, 17022.0], [72.8, 17052.0], [72.9, 17052.0], [73.0, 17052.0], [73.1, 17052.0], [73.2, 17119.0], [73.3, 17119.0], [73.4, 17119.0], [73.5, 17119.0], [73.6, 17152.0], [73.7, 17152.0], [73.8, 17152.0], [73.9, 17152.0], [74.0, 17156.0], [74.1, 17156.0], [74.2, 17156.0], [74.3, 17156.0], [74.4, 17194.0], [74.5, 17194.0], [74.6, 17194.0], [74.7, 17194.0], [74.8, 17236.0], [74.9, 17236.0], [75.0, 17236.0], [75.1, 17236.0], [75.2, 17301.0], [75.3, 17301.0], [75.4, 17301.0], [75.5, 17301.0], [75.6, 17355.0], [75.7, 17355.0], [75.8, 17355.0], [75.9, 17355.0], [76.0, 17396.0], [76.1, 17396.0], [76.2, 17396.0], [76.3, 17396.0], [76.4, 17488.0], [76.5, 17488.0], [76.6, 17488.0], [76.7, 17488.0], [76.8, 17488.0], [76.9, 17515.0], [77.0, 17515.0], [77.1, 17515.0], [77.2, 17515.0], [77.3, 17519.0], [77.4, 17519.0], [77.5, 17519.0], [77.6, 17519.0], [77.7, 17544.0], [77.8, 17544.0], [77.9, 17544.0], [78.0, 17544.0], [78.1, 17577.0], [78.2, 17577.0], [78.3, 17577.0], [78.4, 17577.0], [78.5, 17594.0], [78.6, 17594.0], [78.7, 17594.0], [78.8, 17594.0], [78.9, 17638.0], [79.0, 17638.0], [79.1, 17638.0], [79.2, 17638.0], [79.3, 17667.0], [79.4, 17667.0], [79.5, 17667.0], [79.6, 17667.0], [79.7, 17683.0], [79.8, 17683.0], [79.9, 17683.0], [80.0, 17683.0], [80.1, 17730.0], [80.2, 17730.0], [80.3, 17730.0], [80.4, 17730.0], [80.5, 17741.0], [80.6, 17741.0], [80.7, 17741.0], [80.8, 17741.0], [80.9, 17748.0], [81.0, 17748.0], [81.1, 17748.0], [81.2, 17748.0], [81.3, 17752.0], [81.4, 17752.0], [81.5, 17752.0], [81.6, 17752.0], [81.7, 17806.0], [81.8, 17806.0], [81.9, 17806.0], [82.0, 17806.0], [82.1, 17882.0], [82.2, 17882.0], [82.3, 17882.0], [82.4, 17882.0], [82.5, 17892.0], [82.6, 17892.0], [82.7, 17892.0], [82.8, 17892.0], [82.9, 17954.0], [83.0, 17954.0], [83.1, 17954.0], [83.2, 17954.0], [83.3, 17986.0], [83.4, 17986.0], [83.5, 17986.0], [83.6, 17986.0], [83.7, 18045.0], [83.8, 18045.0], [83.9, 18045.0], [84.0, 18045.0], [84.1, 18127.0], [84.2, 18127.0], [84.3, 18127.0], [84.4, 18127.0], [84.5, 18132.0], [84.6, 18132.0], [84.7, 18132.0], [84.8, 18132.0], [84.9, 18213.0], [85.0, 18213.0], [85.1, 18213.0], [85.2, 18213.0], [85.3, 18304.0], [85.4, 18304.0], [85.5, 18304.0], [85.6, 18304.0], [85.7, 18327.0], [85.8, 18327.0], [85.9, 18327.0], [86.0, 18327.0], [86.1, 18377.0], [86.2, 18377.0], [86.3, 18377.0], [86.4, 18377.0], [86.5, 18378.0], [86.6, 18378.0], [86.7, 18378.0], [86.8, 18378.0], [86.9, 18410.0], [87.0, 18410.0], [87.1, 18410.0], [87.2, 18410.0], [87.3, 18424.0], [87.4, 18424.0], [87.5, 18424.0], [87.6, 18424.0], [87.7, 18450.0], [87.8, 18450.0], [87.9, 18450.0], [88.0, 18450.0], [88.1, 18491.0], [88.2, 18491.0], [88.3, 18491.0], [88.4, 18491.0], [88.5, 18499.0], [88.6, 18499.0], [88.7, 18499.0], [88.8, 18499.0], [88.9, 18542.0], [89.0, 18542.0], [89.1, 18542.0], [89.2, 18542.0], [89.3, 18591.0], [89.4, 18591.0], [89.5, 18591.0], [89.6, 18591.0], [89.7, 18618.0], [89.8, 18618.0], [89.9, 18618.0], [90.0, 18618.0], [90.1, 18649.0], [90.2, 18649.0], [90.3, 18649.0], [90.4, 18649.0], [90.5, 18724.0], [90.6, 18724.0], [90.7, 18724.0], [90.8, 18724.0], [90.9, 18751.0], [91.0, 18751.0], [91.1, 18751.0], [91.2, 18751.0], [91.3, 18844.0], [91.4, 18844.0], [91.5, 18844.0], [91.6, 18844.0], [91.7, 18920.0], [91.8, 18920.0], [91.9, 18920.0], [92.0, 18920.0], [92.1, 18964.0], [92.2, 18964.0], [92.3, 18964.0], [92.4, 18964.0], [92.5, 19051.0], [92.6, 19051.0], [92.7, 19051.0], [92.8, 19051.0], [92.9, 19086.0], [93.0, 19086.0], [93.1, 19086.0], [93.2, 19086.0], [93.3, 19154.0], [93.4, 19154.0], [93.5, 19154.0], [93.6, 19154.0], [93.7, 19230.0], [93.8, 19230.0], [93.9, 19230.0], [94.0, 19230.0], [94.1, 19295.0], [94.2, 19295.0], [94.3, 19295.0], [94.4, 19295.0], [94.5, 19674.0], [94.6, 19674.0], [94.7, 19674.0], [94.8, 19674.0], [94.9, 20354.0], [95.0, 20354.0], [95.1, 20354.0], [95.2, 20354.0], [95.3, 20442.0], [95.4, 20442.0], [95.5, 20442.0], [95.6, 20442.0], [95.7, 20479.0], [95.8, 20479.0], [95.9, 20479.0], [96.0, 20479.0], [96.1, 20645.0], [96.2, 20645.0], [96.3, 20645.0], [96.4, 20645.0], [96.5, 20801.0], [96.6, 20801.0], [96.7, 20801.0], [96.8, 20801.0], [96.9, 20874.0], [97.0, 20874.0], [97.1, 20874.0], [97.2, 20874.0], [97.3, 21264.0], [97.4, 21264.0], [97.5, 21264.0], [97.6, 21264.0], [97.7, 21439.0], [97.8, 21439.0], [97.9, 21439.0], [98.0, 21439.0], [98.1, 21524.0], [98.2, 21524.0], [98.3, 21524.0], [98.4, 21524.0], [98.5, 21888.0], [98.6, 21888.0], [98.7, 21888.0], [98.8, 21888.0], [98.9, 22217.0], [99.0, 22217.0], [99.1, 22217.0], [99.2, 22217.0], [99.3, 24271.0], [99.4, 24271.0], [99.5, 24271.0], [99.6, 24271.0], [99.7, 26768.0], [99.8, 26768.0], [99.9, 26768.0], [100.0, 26768.0]], "isOverall": false, "label": "Login Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 300.0, "maxY": 11.0, "series": [{"data": [[300.0, 6.0], [400.0, 3.0], [500.0, 5.0], [600.0, 11.0], [700.0, 7.0], [800.0, 3.0], [900.0, 1.0], [1000.0, 5.0], [1100.0, 2.0], [1200.0, 1.0], [1400.0, 1.0], [1700.0, 1.0], [2000.0, 1.0], [2400.0, 1.0], [4300.0, 2.0], [4100.0, 1.0], [4600.0, 1.0], [4400.0, 1.0], [4700.0, 1.0], [5500.0, 1.0], [8000.0, 1.0], [8700.0, 1.0], [8500.0, 1.0], [9500.0, 1.0], [9400.0, 1.0], [9300.0, 1.0], [10600.0, 2.0], [10500.0, 1.0], [11200.0, 1.0], [11100.0, 2.0], [11000.0, 1.0], [10800.0, 1.0], [11700.0, 1.0], [12200.0, 1.0], [12100.0, 2.0], [12000.0, 2.0], [11900.0, 1.0], [11800.0, 2.0], [12400.0, 1.0], [12300.0, 1.0], [13200.0, 2.0], [12900.0, 2.0], [12800.0, 2.0], [13300.0, 1.0], [13100.0, 1.0], [13000.0, 2.0], [13600.0, 3.0], [13400.0, 3.0], [13800.0, 2.0], [13500.0, 1.0], [14300.0, 5.0], [14200.0, 1.0], [14100.0, 1.0], [14000.0, 1.0], [13900.0, 1.0], [14600.0, 4.0], [14800.0, 2.0], [14700.0, 4.0], [14500.0, 3.0], [14400.0, 2.0], [15300.0, 4.0], [15200.0, 5.0], [15100.0, 3.0], [15000.0, 2.0], [14900.0, 3.0], [15800.0, 2.0], [15700.0, 3.0], [15600.0, 2.0], [15500.0, 2.0], [15400.0, 1.0], [16300.0, 2.0], [16200.0, 5.0], [16100.0, 3.0], [16000.0, 2.0], [15900.0, 2.0], [17300.0, 3.0], [17200.0, 1.0], [17100.0, 4.0], [16500.0, 5.0], [16400.0, 4.0], [17400.0, 1.0], [16900.0, 1.0], [17000.0, 2.0], [16800.0, 3.0], [16700.0, 1.0], [16600.0, 3.0], [17600.0, 3.0], [18400.0, 5.0], [18300.0, 4.0], [18200.0, 1.0], [18100.0, 2.0], [17700.0, 4.0], [17500.0, 5.0], [18000.0, 1.0], [17900.0, 2.0], [17800.0, 3.0], [18700.0, 2.0], [19200.0, 2.0], [19100.0, 1.0], [18900.0, 2.0], [18500.0, 2.0], [18800.0, 1.0], [18600.0, 2.0], [19000.0, 2.0], [20400.0, 2.0], [19600.0, 1.0], [20300.0, 1.0], [21500.0, 1.0], [21400.0, 1.0], [21200.0, 1.0], [20800.0, 2.0], [20600.0, 1.0], [21800.0, 1.0], [22200.0, 1.0], [24200.0, 1.0], [26700.0, 1.0]], "isOverall": false, "label": "Login Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 26700.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 9.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 205.0, "series": [{"data": [[0.0, 9.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 36.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 205.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 76.796, "minX": 1.76964354E12, "maxY": 76.796, "series": [{"data": [[1.76964354E12, 76.796]], "isOverall": false, "label": "Grupo de Usuarios - Sistema", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76964354E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 2036.4444444444443, "minX": 1.0, "maxY": 26768.0, "series": [{"data": [[2.0, 19051.0], [3.0, 14657.0], [4.0, 14746.0], [5.0, 14364.0], [6.0, 3837.75], [7.0, 2036.4444444444443], [8.0, 2543.4285714285716], [9.0, 3427.6], [10.0, 3451.4], [11.0, 2769.285714285714], [12.0, 3587.0], [13.0, 4378.0], [14.0, 4507.75], [15.0, 5953.666666666667], [16.0, 8121.0], [17.0, 8191.0], [18.0, 8622.0], [19.0, 8353.0], [20.0, 15362.0], [21.0, 16243.0], [22.0, 16644.0], [23.0, 17022.0], [24.0, 17577.0], [25.0, 17752.0], [26.0, 18132.0], [27.0, 18377.0], [28.0, 19086.0], [29.0, 15232.0], [30.0, 15300.0], [31.0, 15373.0], [33.0, 8965.0], [32.0, 15438.0], [35.0, 15683.0], [34.0, 15595.0], [37.0, 15835.0], [36.0, 15757.0], [39.0, 16061.0], [38.0, 15905.0], [41.0, 16243.0], [40.0, 16139.0], [43.0, 16460.0], [42.0, 16299.0], [45.0, 16590.0], [44.0, 16514.0], [47.0, 16818.0], [46.0, 16670.0], [49.0, 16981.0], [48.0, 16899.0], [51.0, 17119.0], [50.0, 17052.0], [53.0, 17355.0], [52.0, 17194.0], [55.0, 17594.0], [54.0, 17519.0], [57.0, 17741.0], [56.0, 17667.0], [59.0, 11187.0], [58.0, 8802.0], [61.0, 9523.666666666668], [60.0, 9090.0], [63.0, 18450.0], [62.0, 18378.0], [67.0, 18844.0], [66.0, 18649.0], [65.0, 18618.0], [64.0, 18542.0], [71.0, 14347.0], [70.0, 22217.0], [69.0, 26768.0], [68.0, 18920.0], [75.0, 15796.0], [74.0, 15718.0], [73.0, 15643.0], [72.0, 15163.0], [78.0, 16043.0], [77.0, 15966.0], [76.0, 15865.0], [83.0, 16435.0], [82.0, 16364.0], [81.0, 16191.333333333334], [87.0, 16726.0], [86.0, 16656.0], [85.0, 16581.0], [84.0, 16511.0], [91.0, 17515.0], [90.0, 17488.0], [89.0, 17396.0], [88.0, 16816.0], [95.0, 17882.0], [94.0, 17806.0], [93.0, 17730.0], [92.0, 17638.0], [99.0, 20442.0], [98.0, 20354.0], [97.0, 18045.0], [96.0, 17954.0], [103.0, 18751.0], [102.0, 18591.0], [101.0, 18491.0], [100.0, 18424.0], [107.0, 13023.0], [106.0, 12917.0], [105.0, 12844.0], [104.0, 18964.0], [111.0, 13340.0], [110.0, 13249.0], [109.0, 13170.0], [108.0, 13096.0], [115.0, 11541.0], [114.0, 11461.0], [113.0, 13455.5], [116.0, 9964.0], [117.0, 11265.0], [119.0, 13966.0], [118.0, 13871.0], [123.0, 14342.0], [122.0, 14262.0], [121.0, 14121.0], [120.0, 14045.0], [127.0, 14664.0], [126.0, 14589.0], [125.0, 14513.0], [124.0, 14436.0], [135.0, 15370.0], [134.0, 15291.0], [133.0, 15217.0], [132.0, 15122.0], [131.0, 15051.0], [130.0, 14904.0], [129.0, 14823.0], [128.0, 14739.0], [143.0, 19192.0], [141.0, 17152.0], [140.0, 16550.0], [139.0, 16496.0], [138.0, 16408.0], [137.0, 16327.0], [136.0, 16258.0], [151.0, 17748.0], [150.0, 17683.0], [149.0, 17544.0], [148.0, 17301.0], [147.0, 17236.0], [146.0, 17156.0], [145.0, 21888.0], [144.0, 19295.0], [159.0, 16233.0], [158.0, 16115.5], [157.0, 15459.5], [156.0, 12961.5], [155.0, 13410.0], [154.0, 14513.0], [153.0, 14439.0], [152.0, 18127.0], [167.0, 12347.0], [166.0, 12264.0], [165.0, 12195.0], [164.0, 18356.0], [163.0, 12033.0], [162.0, 15397.666666666666], [161.0, 16128.666666666666], [160.0, 14921.333333333334], [170.0, 13612.0], [169.0, 13348.5], [168.0, 12419.0], [1.0, 24271.0]], "isOverall": false, "label": "Login Request", "isController": false}, {"data": [[76.796, 12661.991999999997]], "isOverall": false, "label": "Login Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 170.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 1012.5, "minX": 1.76964354E12, "maxY": 3508.3333333333335, "series": [{"data": [[1.76964354E12, 3508.3333333333335]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.76964354E12, 1012.5]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76964354E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 12661.991999999997, "minX": 1.76964354E12, "maxY": 12661.991999999997, "series": [{"data": [[1.76964354E12, 12661.991999999997]], "isOverall": false, "label": "Login Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76964354E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 12661.880000000001, "minX": 1.76964354E12, "maxY": 12661.880000000001, "series": [{"data": [[1.76964354E12, 12661.880000000001]], "isOverall": false, "label": "Login Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76964354E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 5.464000000000001, "minX": 1.76964354E12, "maxY": 5.464000000000001, "series": [{"data": [[1.76964354E12, 5.464000000000001]], "isOverall": false, "label": "Login Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76964354E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 314.0, "minX": 1.76964354E12, "maxY": 26768.0, "series": [{"data": [[1.76964354E12, 26768.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.76964354E12, 314.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.76964354E12, 18645.9]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.76964354E12, 23223.460000000017]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.76964354E12, 14961.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.76964354E12, 20393.6]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76964354E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 522.0, "minX": 1.0, "maxY": 19674.0, "series": [{"data": [[1.0, 2404.0], [65.0, 16514.0], [4.0, 16898.5], [11.0, 522.0], [12.0, 701.5], [6.0, 5014.5], [49.0, 16264.0], [25.0, 12033.0], [7.0, 2984.5], [15.0, 19674.0], [31.0, 15291.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 65.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 522.0, "minX": 1.0, "maxY": 19674.0, "series": [{"data": [[1.0, 2404.0], [65.0, 16514.0], [4.0, 16898.5], [11.0, 522.0], [12.0, 701.5], [6.0, 5014.5], [49.0, 16264.0], [25.0, 12033.0], [7.0, 2984.5], [15.0, 19674.0], [31.0, 15291.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 65.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 4.166666666666667, "minX": 1.76964354E12, "maxY": 4.166666666666667, "series": [{"data": [[1.76964354E12, 4.166666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76964354E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 4.166666666666667, "minX": 1.76964354E12, "maxY": 4.166666666666667, "series": [{"data": [[1.76964354E12, 4.166666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76964354E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 4.166666666666667, "minX": 1.76964354E12, "maxY": 4.166666666666667, "series": [{"data": [[1.76964354E12, 4.166666666666667]], "isOverall": false, "label": "Login Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76964354E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 4.166666666666667, "minX": 1.76964354E12, "maxY": 4.166666666666667, "series": [{"data": [[1.76964354E12, 4.166666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76964354E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

