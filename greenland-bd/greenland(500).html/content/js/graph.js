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
        data: {"result": {"minY": 57.0, "minX": 0.0, "maxY": 5534.0, "series": [{"data": [[0.0, 57.0], [0.1, 57.0], [0.2, 58.0], [0.3, 58.0], [0.4, 58.0], [0.5, 58.0], [0.6, 58.0], [0.7, 58.0], [0.8, 61.0], [0.9, 61.0], [1.0, 61.0], [1.1, 61.0], [1.2, 61.0], [1.3, 64.0], [1.4, 64.0], [1.5, 64.0], [1.6, 64.0], [1.7, 64.0], [1.8, 64.0], [1.9, 66.0], [2.0, 66.0], [2.1, 66.0], [2.2, 67.0], [2.3, 67.0], [2.4, 67.0], [2.5, 67.0], [2.6, 68.0], [2.7, 68.0], [2.8, 68.0], [2.9, 69.0], [3.0, 69.0], [3.1, 69.0], [3.2, 69.0], [3.3, 69.0], [3.4, 69.0], [3.5, 69.0], [3.6, 69.0], [3.7, 70.0], [3.8, 70.0], [3.9, 70.0], [4.0, 70.0], [4.1, 71.0], [4.2, 71.0], [4.3, 71.0], [4.4, 71.0], [4.5, 71.0], [4.6, 71.0], [4.7, 71.0], [4.8, 71.0], [4.9, 71.0], [5.0, 71.0], [5.1, 71.0], [5.2, 71.0], [5.3, 72.0], [5.4, 72.0], [5.5, 72.0], [5.6, 72.0], [5.7, 72.0], [5.8, 72.0], [5.9, 72.0], [6.0, 72.0], [6.1, 73.0], [6.2, 73.0], [6.3, 73.0], [6.4, 73.0], [6.5, 73.0], [6.6, 73.0], [6.7, 73.0], [6.8, 73.0], [6.9, 73.0], [7.0, 73.0], [7.1, 74.0], [7.2, 74.0], [7.3, 75.0], [7.4, 75.0], [7.5, 75.0], [7.6, 75.0], [7.7, 75.0], [7.8, 75.0], [7.9, 75.0], [8.0, 75.0], [8.1, 76.0], [8.2, 76.0], [8.3, 76.0], [8.4, 76.0], [8.5, 77.0], [8.6, 77.0], [8.7, 77.0], [8.8, 77.0], [8.9, 77.0], [9.0, 77.0], [9.1, 77.0], [9.2, 77.0], [9.3, 78.0], [9.4, 78.0], [9.5, 78.0], [9.6, 78.0], [9.7, 78.0], [9.8, 78.0], [9.9, 78.0], [10.0, 78.0], [10.1, 78.0], [10.2, 78.0], [10.3, 78.0], [10.4, 78.0], [10.5, 79.0], [10.6, 79.0], [10.7, 79.0], [10.8, 79.0], [10.9, 79.0], [11.0, 79.0], [11.1, 80.0], [11.2, 80.0], [11.3, 80.0], [11.4, 80.0], [11.5, 80.0], [11.6, 80.0], [11.7, 81.0], [11.8, 81.0], [11.9, 81.0], [12.0, 81.0], [12.1, 81.0], [12.2, 81.0], [12.3, 83.0], [12.4, 83.0], [12.5, 83.0], [12.6, 83.0], [12.7, 83.0], [12.8, 83.0], [12.9, 83.0], [13.0, 83.0], [13.1, 83.0], [13.2, 83.0], [13.3, 85.0], [13.4, 85.0], [13.5, 85.0], [13.6, 85.0], [13.7, 85.0], [13.8, 85.0], [13.9, 85.0], [14.0, 85.0], [14.1, 86.0], [14.2, 86.0], [14.3, 86.0], [14.4, 86.0], [14.5, 86.0], [14.6, 86.0], [14.7, 87.0], [14.8, 87.0], [14.9, 87.0], [15.0, 87.0], [15.1, 87.0], [15.2, 87.0], [15.3, 87.0], [15.4, 87.0], [15.5, 88.0], [15.6, 88.0], [15.7, 88.0], [15.8, 88.0], [15.9, 88.0], [16.0, 88.0], [16.1, 88.0], [16.2, 88.0], [16.3, 90.0], [16.4, 90.0], [16.5, 90.0], [16.6, 90.0], [16.7, 90.0], [16.8, 90.0], [16.9, 91.0], [17.0, 91.0], [17.1, 91.0], [17.2, 91.0], [17.3, 91.0], [17.4, 91.0], [17.5, 91.0], [17.6, 91.0], [17.7, 91.0], [17.8, 91.0], [17.9, 92.0], [18.0, 92.0], [18.1, 93.0], [18.2, 93.0], [18.3, 93.0], [18.4, 93.0], [18.5, 93.0], [18.6, 93.0], [18.7, 93.0], [18.8, 93.0], [18.9, 94.0], [19.0, 94.0], [19.1, 94.0], [19.2, 94.0], [19.3, 94.0], [19.4, 94.0], [19.5, 94.0], [19.6, 94.0], [19.7, 95.0], [19.8, 95.0], [19.9, 95.0], [20.0, 95.0], [20.1, 96.0], [20.2, 96.0], [20.3, 96.0], [20.4, 96.0], [20.5, 96.0], [20.6, 96.0], [20.7, 97.0], [20.8, 97.0], [20.9, 97.0], [21.0, 97.0], [21.1, 97.0], [21.2, 97.0], [21.3, 97.0], [21.4, 97.0], [21.5, 98.0], [21.6, 98.0], [21.7, 98.0], [21.8, 98.0], [21.9, 98.0], [22.0, 98.0], [22.1, 98.0], [22.2, 98.0], [22.3, 98.0], [22.4, 98.0], [22.5, 99.0], [22.6, 99.0], [22.7, 99.0], [22.8, 99.0], [22.9, 101.0], [23.0, 101.0], [23.1, 101.0], [23.2, 101.0], [23.3, 101.0], [23.4, 101.0], [23.5, 101.0], [23.6, 101.0], [23.7, 102.0], [23.8, 102.0], [23.9, 102.0], [24.0, 102.0], [24.1, 102.0], [24.2, 102.0], [24.3, 102.0], [24.4, 102.0], [24.5, 103.0], [24.6, 103.0], [24.7, 103.0], [24.8, 103.0], [24.9, 104.0], [25.0, 104.0], [25.1, 104.0], [25.2, 104.0], [25.3, 104.0], [25.4, 104.0], [25.5, 105.0], [25.6, 105.0], [25.7, 106.0], [25.8, 106.0], [25.9, 106.0], [26.0, 106.0], [26.1, 106.0], [26.2, 106.0], [26.3, 107.0], [26.4, 107.0], [26.5, 107.0], [26.6, 107.0], [26.7, 107.0], [26.8, 107.0], [26.9, 108.0], [27.0, 108.0], [27.1, 108.0], [27.2, 108.0], [27.3, 108.0], [27.4, 108.0], [27.5, 109.0], [27.6, 109.0], [27.7, 110.0], [27.8, 110.0], [27.9, 110.0], [28.0, 110.0], [28.1, 111.0], [28.2, 111.0], [28.3, 112.0], [28.4, 112.0], [28.5, 112.0], [28.6, 112.0], [28.7, 112.0], [28.8, 112.0], [28.9, 113.0], [29.0, 113.0], [29.1, 113.0], [29.2, 113.0], [29.3, 113.0], [29.4, 113.0], [29.5, 113.0], [29.6, 113.0], [29.7, 115.0], [29.8, 115.0], [29.9, 115.0], [30.0, 115.0], [30.1, 116.0], [30.2, 116.0], [30.3, 116.0], [30.4, 116.0], [30.5, 117.0], [30.6, 117.0], [30.7, 118.0], [30.8, 118.0], [30.9, 118.0], [31.0, 118.0], [31.1, 119.0], [31.2, 119.0], [31.3, 119.0], [31.4, 119.0], [31.5, 120.0], [31.6, 120.0], [31.7, 120.0], [31.8, 122.0], [31.9, 122.0], [32.0, 123.0], [32.1, 123.0], [32.2, 124.0], [32.3, 124.0], [32.4, 124.0], [32.5, 124.0], [32.6, 126.0], [32.7, 126.0], [32.8, 126.0], [32.9, 126.0], [33.0, 126.0], [33.1, 126.0], [33.2, 127.0], [33.3, 127.0], [33.4, 127.0], [33.5, 127.0], [33.6, 128.0], [33.7, 128.0], [33.8, 128.0], [33.9, 130.0], [34.0, 130.0], [34.1, 130.0], [34.2, 130.0], [34.3, 130.0], [34.4, 130.0], [34.5, 131.0], [34.6, 131.0], [34.7, 131.0], [34.8, 131.0], [34.9, 131.0], [35.0, 131.0], [35.1, 132.0], [35.2, 132.0], [35.3, 132.0], [35.4, 132.0], [35.5, 133.0], [35.6, 133.0], [35.7, 133.0], [35.8, 133.0], [35.9, 135.0], [36.0, 135.0], [36.1, 136.0], [36.2, 136.0], [36.3, 136.0], [36.4, 136.0], [36.5, 136.0], [36.6, 136.0], [36.7, 137.0], [36.8, 137.0], [36.9, 138.0], [37.0, 138.0], [37.1, 141.0], [37.2, 141.0], [37.3, 141.0], [37.4, 141.0], [37.5, 144.0], [37.6, 144.0], [37.7, 149.0], [37.8, 149.0], [37.9, 149.0], [38.0, 149.0], [38.1, 150.0], [38.2, 150.0], [38.3, 151.0], [38.4, 151.0], [38.5, 152.0], [38.6, 152.0], [38.7, 152.0], [38.8, 152.0], [38.9, 153.0], [39.0, 153.0], [39.1, 153.0], [39.2, 153.0], [39.3, 155.0], [39.4, 155.0], [39.5, 155.0], [39.6, 155.0], [39.7, 162.0], [39.8, 162.0], [39.9, 165.0], [40.0, 165.0], [40.1, 168.0], [40.2, 168.0], [40.3, 169.0], [40.4, 169.0], [40.5, 171.0], [40.6, 171.0], [40.7, 173.0], [40.8, 173.0], [40.9, 174.0], [41.0, 174.0], [41.1, 175.0], [41.2, 175.0], [41.3, 181.0], [41.4, 181.0], [41.5, 183.0], [41.6, 183.0], [41.7, 192.0], [41.8, 192.0], [41.9, 194.0], [42.0, 194.0], [42.1, 195.0], [42.2, 195.0], [42.3, 195.0], [42.4, 195.0], [42.5, 202.0], [42.6, 202.0], [42.7, 203.0], [42.8, 203.0], [42.9, 205.0], [43.0, 205.0], [43.1, 206.0], [43.2, 206.0], [43.3, 208.0], [43.4, 208.0], [43.5, 209.0], [43.6, 209.0], [43.7, 211.0], [43.8, 211.0], [43.9, 212.0], [44.0, 212.0], [44.1, 215.0], [44.2, 215.0], [44.3, 221.0], [44.4, 221.0], [44.5, 223.0], [44.6, 223.0], [44.7, 228.0], [44.8, 228.0], [44.9, 230.0], [45.0, 230.0], [45.1, 230.0], [45.2, 230.0], [45.3, 234.0], [45.4, 234.0], [45.5, 234.0], [45.6, 234.0], [45.7, 235.0], [45.8, 235.0], [45.9, 245.0], [46.0, 245.0], [46.1, 253.0], [46.2, 253.0], [46.3, 260.0], [46.4, 260.0], [46.5, 266.0], [46.6, 266.0], [46.7, 269.0], [46.8, 269.0], [46.9, 270.0], [47.0, 270.0], [47.1, 273.0], [47.2, 273.0], [47.3, 274.0], [47.4, 274.0], [47.5, 274.0], [47.6, 274.0], [47.7, 276.0], [47.8, 276.0], [47.9, 276.0], [48.0, 276.0], [48.1, 276.0], [48.2, 276.0], [48.3, 276.0], [48.4, 276.0], [48.5, 278.0], [48.6, 278.0], [48.7, 281.0], [48.8, 281.0], [48.9, 286.0], [49.0, 286.0], [49.1, 288.0], [49.2, 288.0], [49.3, 289.0], [49.4, 289.0], [49.5, 289.0], [49.6, 289.0], [49.7, 289.0], [49.8, 289.0], [49.9, 290.0], [50.0, 290.0], [50.1, 296.0], [50.2, 296.0], [50.3, 297.0], [50.4, 297.0], [50.5, 298.0], [50.6, 298.0], [50.7, 298.0], [50.8, 298.0], [50.9, 300.0], [51.0, 300.0], [51.1, 305.0], [51.2, 305.0], [51.3, 307.0], [51.4, 307.0], [51.5, 311.0], [51.6, 311.0], [51.7, 312.0], [51.8, 312.0], [51.9, 318.0], [52.0, 318.0], [52.1, 320.0], [52.2, 320.0], [52.3, 321.0], [52.4, 321.0], [52.5, 325.0], [52.6, 325.0], [52.7, 325.0], [52.8, 325.0], [52.9, 326.0], [53.0, 326.0], [53.1, 331.0], [53.2, 331.0], [53.3, 332.0], [53.4, 332.0], [53.5, 333.0], [53.6, 333.0], [53.7, 360.0], [53.8, 360.0], [53.9, 361.0], [54.0, 361.0], [54.1, 366.0], [54.2, 366.0], [54.3, 367.0], [54.4, 367.0], [54.5, 368.0], [54.6, 368.0], [54.7, 368.0], [54.8, 368.0], [54.9, 370.0], [55.0, 370.0], [55.1, 370.0], [55.2, 370.0], [55.3, 384.0], [55.4, 384.0], [55.5, 389.0], [55.6, 389.0], [55.7, 403.0], [55.8, 403.0], [55.9, 408.0], [56.0, 408.0], [56.1, 411.0], [56.2, 411.0], [56.3, 413.0], [56.4, 413.0], [56.5, 419.0], [56.6, 419.0], [56.7, 424.0], [56.8, 424.0], [56.9, 426.0], [57.0, 426.0], [57.1, 431.0], [57.2, 431.0], [57.3, 431.0], [57.4, 431.0], [57.5, 433.0], [57.6, 433.0], [57.7, 441.0], [57.8, 441.0], [57.9, 444.0], [58.0, 444.0], [58.1, 448.0], [58.2, 448.0], [58.3, 459.0], [58.4, 459.0], [58.5, 461.0], [58.6, 461.0], [58.7, 463.0], [58.8, 463.0], [58.9, 464.0], [59.0, 464.0], [59.1, 465.0], [59.2, 465.0], [59.3, 465.0], [59.4, 465.0], [59.5, 467.0], [59.6, 467.0], [59.7, 468.0], [59.8, 468.0], [59.9, 473.0], [60.0, 473.0], [60.1, 486.0], [60.2, 486.0], [60.3, 490.0], [60.4, 490.0], [60.5, 502.0], [60.6, 502.0], [60.7, 504.0], [60.8, 504.0], [60.9, 505.0], [61.0, 505.0], [61.1, 506.0], [61.2, 506.0], [61.3, 513.0], [61.4, 513.0], [61.5, 513.0], [61.6, 513.0], [61.7, 525.0], [61.8, 525.0], [61.9, 526.0], [62.0, 526.0], [62.1, 538.0], [62.2, 538.0], [62.3, 555.0], [62.4, 555.0], [62.5, 558.0], [62.6, 558.0], [62.7, 560.0], [62.8, 560.0], [62.9, 564.0], [63.0, 564.0], [63.1, 571.0], [63.2, 571.0], [63.3, 577.0], [63.4, 577.0], [63.5, 613.0], [63.6, 613.0], [63.7, 628.0], [63.8, 628.0], [63.9, 632.0], [64.0, 632.0], [64.1, 635.0], [64.2, 635.0], [64.3, 650.0], [64.4, 650.0], [64.5, 662.0], [64.6, 662.0], [64.7, 673.0], [64.8, 673.0], [64.9, 695.0], [65.0, 695.0], [65.1, 720.0], [65.2, 720.0], [65.3, 728.0], [65.4, 728.0], [65.5, 729.0], [65.6, 729.0], [65.7, 729.0], [65.8, 729.0], [65.9, 740.0], [66.0, 740.0], [66.1, 746.0], [66.2, 746.0], [66.3, 750.0], [66.4, 750.0], [66.5, 772.0], [66.6, 772.0], [66.7, 774.0], [66.8, 774.0], [66.9, 832.0], [67.0, 832.0], [67.1, 838.0], [67.2, 838.0], [67.3, 840.0], [67.4, 840.0], [67.5, 845.0], [67.6, 845.0], [67.7, 851.0], [67.8, 851.0], [67.9, 855.0], [68.0, 855.0], [68.1, 860.0], [68.2, 860.0], [68.3, 872.0], [68.4, 872.0], [68.5, 874.0], [68.6, 874.0], [68.7, 877.0], [68.8, 877.0], [68.9, 878.0], [69.0, 878.0], [69.1, 888.0], [69.2, 888.0], [69.3, 892.0], [69.4, 892.0], [69.5, 897.0], [69.6, 897.0], [69.7, 901.0], [69.8, 901.0], [69.9, 904.0], [70.0, 904.0], [70.1, 936.0], [70.2, 936.0], [70.3, 950.0], [70.4, 950.0], [70.5, 952.0], [70.6, 952.0], [70.7, 963.0], [70.8, 963.0], [70.9, 986.0], [71.0, 986.0], [71.1, 992.0], [71.2, 992.0], [71.3, 1010.0], [71.4, 1010.0], [71.5, 1027.0], [71.6, 1027.0], [71.7, 1036.0], [71.8, 1036.0], [71.9, 1053.0], [72.0, 1053.0], [72.1, 1080.0], [72.2, 1080.0], [72.3, 1084.0], [72.4, 1084.0], [72.5, 1091.0], [72.6, 1091.0], [72.7, 1096.0], [72.8, 1096.0], [72.9, 1097.0], [73.0, 1097.0], [73.1, 1103.0], [73.2, 1103.0], [73.3, 1105.0], [73.4, 1105.0], [73.5, 1107.0], [73.6, 1107.0], [73.7, 1114.0], [73.8, 1114.0], [73.9, 1115.0], [74.0, 1115.0], [74.1, 1121.0], [74.2, 1121.0], [74.3, 1121.0], [74.4, 1121.0], [74.5, 1126.0], [74.6, 1126.0], [74.7, 1138.0], [74.8, 1138.0], [74.9, 1147.0], [75.0, 1147.0], [75.1, 1149.0], [75.2, 1149.0], [75.3, 1157.0], [75.4, 1157.0], [75.5, 1163.0], [75.6, 1163.0], [75.7, 1193.0], [75.8, 1193.0], [75.9, 1210.0], [76.0, 1210.0], [76.1, 1211.0], [76.2, 1211.0], [76.3, 1217.0], [76.4, 1217.0], [76.5, 1223.0], [76.6, 1223.0], [76.7, 1229.0], [76.8, 1229.0], [76.9, 1238.0], [77.0, 1238.0], [77.1, 1242.0], [77.2, 1242.0], [77.3, 1259.0], [77.4, 1259.0], [77.5, 1280.0], [77.6, 1280.0], [77.7, 1288.0], [77.8, 1288.0], [77.9, 1292.0], [78.0, 1292.0], [78.1, 1304.0], [78.2, 1304.0], [78.3, 1312.0], [78.4, 1312.0], [78.5, 1331.0], [78.6, 1331.0], [78.7, 1332.0], [78.8, 1332.0], [78.9, 1332.0], [79.0, 1332.0], [79.1, 1338.0], [79.2, 1338.0], [79.3, 1338.0], [79.4, 1338.0], [79.5, 1349.0], [79.6, 1349.0], [79.7, 1355.0], [79.8, 1355.0], [79.9, 1361.0], [80.0, 1361.0], [80.1, 1363.0], [80.2, 1363.0], [80.3, 1379.0], [80.4, 1379.0], [80.5, 1379.0], [80.6, 1379.0], [80.7, 1382.0], [80.8, 1382.0], [80.9, 1383.0], [81.0, 1383.0], [81.1, 1387.0], [81.2, 1387.0], [81.3, 1392.0], [81.4, 1392.0], [81.5, 1392.0], [81.6, 1392.0], [81.7, 1409.0], [81.8, 1409.0], [81.9, 1412.0], [82.0, 1412.0], [82.1, 1418.0], [82.2, 1418.0], [82.3, 1427.0], [82.4, 1427.0], [82.5, 1432.0], [82.6, 1432.0], [82.7, 1452.0], [82.8, 1452.0], [82.9, 1457.0], [83.0, 1457.0], [83.1, 1457.0], [83.2, 1457.0], [83.3, 1461.0], [83.4, 1461.0], [83.5, 1464.0], [83.6, 1464.0], [83.7, 1466.0], [83.8, 1466.0], [83.9, 1469.0], [84.0, 1469.0], [84.1, 1471.0], [84.2, 1471.0], [84.3, 1476.0], [84.4, 1476.0], [84.5, 1484.0], [84.6, 1484.0], [84.7, 1489.0], [84.8, 1489.0], [84.9, 1493.0], [85.0, 1493.0], [85.1, 1502.0], [85.2, 1502.0], [85.3, 1516.0], [85.4, 1516.0], [85.5, 1517.0], [85.6, 1517.0], [85.7, 1525.0], [85.8, 1525.0], [85.9, 1544.0], [86.0, 1544.0], [86.1, 1549.0], [86.2, 1549.0], [86.3, 1557.0], [86.4, 1557.0], [86.5, 1576.0], [86.6, 1576.0], [86.7, 1582.0], [86.8, 1582.0], [86.9, 1592.0], [87.0, 1592.0], [87.1, 1599.0], [87.2, 1599.0], [87.3, 1615.0], [87.4, 1615.0], [87.5, 1629.0], [87.6, 1629.0], [87.7, 1643.0], [87.8, 1643.0], [87.9, 1651.0], [88.0, 1651.0], [88.1, 1652.0], [88.2, 1652.0], [88.3, 1655.0], [88.4, 1655.0], [88.5, 1655.0], [88.6, 1655.0], [88.7, 1670.0], [88.8, 1670.0], [88.9, 1711.0], [89.0, 1711.0], [89.1, 1729.0], [89.2, 1729.0], [89.3, 1771.0], [89.4, 1771.0], [89.5, 1782.0], [89.6, 1782.0], [89.7, 1783.0], [89.8, 1783.0], [89.9, 1818.0], [90.0, 1818.0], [90.1, 1900.0], [90.2, 1900.0], [90.3, 1995.0], [90.4, 1995.0], [90.5, 2004.0], [90.6, 2004.0], [90.7, 2011.0], [90.8, 2011.0], [90.9, 2012.0], [91.0, 2012.0], [91.1, 2027.0], [91.2, 2027.0], [91.3, 2050.0], [91.4, 2050.0], [91.5, 2064.0], [91.6, 2064.0], [91.7, 2066.0], [91.8, 2066.0], [91.9, 2068.0], [92.0, 2068.0], [92.1, 2076.0], [92.2, 2076.0], [92.3, 2123.0], [92.4, 2123.0], [92.5, 2126.0], [92.6, 2126.0], [92.7, 2138.0], [92.8, 2138.0], [92.9, 2168.0], [93.0, 2168.0], [93.1, 2182.0], [93.2, 2182.0], [93.3, 2183.0], [93.4, 2183.0], [93.5, 2184.0], [93.6, 2184.0], [93.7, 2209.0], [93.8, 2209.0], [93.9, 2219.0], [94.0, 2219.0], [94.1, 2220.0], [94.2, 2220.0], [94.3, 2254.0], [94.4, 2254.0], [94.5, 2257.0], [94.6, 2257.0], [94.7, 2276.0], [94.8, 2276.0], [94.9, 2287.0], [95.0, 2287.0], [95.1, 2377.0], [95.2, 2377.0], [95.3, 2391.0], [95.4, 2391.0], [95.5, 2408.0], [95.6, 2408.0], [95.7, 2461.0], [95.8, 2461.0], [95.9, 2476.0], [96.0, 2476.0], [96.1, 2559.0], [96.2, 2559.0], [96.3, 2573.0], [96.4, 2573.0], [96.5, 2590.0], [96.6, 2590.0], [96.7, 2618.0], [96.8, 2618.0], [96.9, 2630.0], [97.0, 2630.0], [97.1, 2634.0], [97.2, 2634.0], [97.3, 2650.0], [97.4, 2650.0], [97.5, 2676.0], [97.6, 2676.0], [97.7, 2769.0], [97.8, 2769.0], [97.9, 2803.0], [98.0, 2803.0], [98.1, 2809.0], [98.2, 2809.0], [98.3, 2906.0], [98.4, 2906.0], [98.5, 2929.0], [98.6, 2929.0], [98.7, 2950.0], [98.8, 2950.0], [98.9, 2971.0], [99.0, 2971.0], [99.1, 3193.0], [99.2, 3193.0], [99.3, 3427.0], [99.4, 3427.0], [99.5, 3460.0], [99.6, 3460.0], [99.7, 4058.0], [99.8, 4058.0], [99.9, 5534.0], [100.0, 5534.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 114.0, "series": [{"data": [[0.0, 114.0], [600.0, 8.0], [700.0, 9.0], [800.0, 14.0], [900.0, 8.0], [1000.0, 9.0], [1100.0, 14.0], [1200.0, 11.0], [1300.0, 18.0], [1400.0, 17.0], [1500.0, 11.0], [1600.0, 8.0], [100.0, 98.0], [1700.0, 5.0], [1800.0, 1.0], [1900.0, 2.0], [2000.0, 9.0], [2100.0, 7.0], [2200.0, 7.0], [2300.0, 2.0], [2400.0, 3.0], [2500.0, 3.0], [2600.0, 5.0], [2800.0, 2.0], [2700.0, 1.0], [2900.0, 4.0], [3100.0, 1.0], [200.0, 42.0], [3400.0, 2.0], [4000.0, 1.0], [300.0, 24.0], [5500.0, 1.0], [400.0, 24.0], [500.0, 15.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 75.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 302.0, "series": [{"data": [[0.0, 302.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 123.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 75.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 35.37399999999997, "minX": 1.64138694E12, "maxY": 35.37399999999997, "series": [{"data": [[1.64138694E12, 35.37399999999997]], "isOverall": false, "label": "report-greenland-bd", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64138694E12, "title": "Active Threads Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 21600000);
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
        data: {"result": {"minY": 95.29411764705881, "minX": 1.0, "maxY": 2971.0, "series": [{"data": [[2.0, 273.0], [3.0, 102.2], [4.0, 101.66666666666666], [5.0, 103.23529411764704], [6.0, 95.29411764705881], [7.0, 171.48648648648648], [8.0, 373.4347826086957], [9.0, 140.05], [10.0, 211.1851851851852], [11.0, 212.95], [12.0, 486.7499999999999], [13.0, 195.53846153846155], [14.0, 759.0], [15.0, 340.6], [16.0, 875.4], [17.0, 838.0], [18.0, 291.3333333333333], [19.0, 185.25], [20.0, 379.0], [21.0, 309.33333333333337], [22.0, 289.5], [23.0, 530.75], [24.0, 590.8], [25.0, 417.5], [26.0, 406.1111111111111], [27.0, 455.3333333333333], [28.0, 407.5], [29.0, 399.3333333333333], [30.0, 560.0], [31.0, 350.6666666666667], [33.0, 453.5], [32.0, 368.0], [35.0, 561.0], [34.0, 441.0], [37.0, 687.0], [36.0, 604.5], [39.0, 720.0], [38.0, 641.6666666666666], [41.0, 734.5], [42.0, 759.6666666666666], [43.0, 728.0], [45.0, 885.0], [44.0, 807.6666666666666], [47.0, 874.0], [46.0, 860.3333333333334], [48.0, 907.2], [51.0, 986.0], [52.0, 897.6666666666666], [54.0, 1084.0], [57.0, 1037.0], [58.0, 1097.0], [61.0, 1252.6], [63.0, 1149.3333333333333], [62.0, 1139.0], [67.0, 1149.0], [66.0, 1232.5], [65.0, 1266.0], [64.0, 1182.0], [71.0, 1229.0], [70.0, 1200.5], [69.0, 1347.5], [68.0, 1288.0], [75.0, 1501.3333333333333], [74.0, 1379.0], [73.0, 1432.0], [72.0, 1338.0], [79.0, 1382.0], [78.0, 2274.0], [77.0, 1399.3333333333333], [76.0, 1735.0], [83.0, 1412.0], [82.0, 1471.0], [81.0, 1493.0], [80.0, 1412.0], [87.0, 2409.0], [86.0, 1470.3333333333333], [85.0, 1484.0], [84.0, 1452.0], [88.0, 2971.0], [90.0, 1615.0], [91.0, 1579.0], [89.0, 1569.3333333333333], [95.0, 2426.0], [93.0, 2573.0], [92.0, 2165.5], [99.0, 2033.6666666666665], [98.0, 1783.0], [97.0, 2769.0], [96.0, 2027.0], [103.0, 1952.4444444444443], [102.0, 2304.5], [101.0, 2377.3333333333335], [100.0, 1931.0], [107.0, 1829.5], [106.0, 1829.3333333333333], [105.0, 1345.8], [104.0, 2390.5], [110.0, 1782.0], [108.0, 2201.0], [111.0, 2476.0], [109.0, 1809.0], [115.0, 2068.0], [114.0, 2132.5], [113.0, 1338.0], [112.0, 1754.8], [118.0, 1983.6666666666667], [117.0, 1157.0], [116.0, 1292.0], [120.0, 1706.75], [1.0, 215.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[35.37399999999997, 692.252]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 120.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1008.3333333333334, "minX": 1.64138694E12, "maxY": 396579.5, "series": [{"data": [[1.64138694E12, 396579.5]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.64138694E12, 1008.3333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64138694E12, "title": "Bytes Throughput Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 21600000);
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
        data: {"result": {"minY": 692.252, "minX": 1.64138694E12, "maxY": 692.252, "series": [{"data": [[1.64138694E12, 692.252]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64138694E12, "title": "Response Time Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 21600000);
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
        data: {"result": {"minY": 618.9959999999996, "minX": 1.64138694E12, "maxY": 618.9959999999996, "series": [{"data": [[1.64138694E12, 618.9959999999996]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64138694E12, "title": "Latencies Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 21600000);
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
        data: {"result": {"minY": 555.5499999999992, "minX": 1.64138694E12, "maxY": 555.5499999999992, "series": [{"data": [[1.64138694E12, 555.5499999999992]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64138694E12, "title": "Connect Time Over Time"}},
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
        fixTimeStamps(infos.data.result.series, 21600000);
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
        data: {"result": {"minY": 57.0, "minX": 1.64138694E12, "maxY": 5534.0, "series": [{"data": [[1.64138694E12, 5534.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.64138694E12, 1891.800000000003]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.64138694E12, 3190.780000000002]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.64138694E12, 2372.499999999999]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.64138694E12, 57.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.64138694E12, 293.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64138694E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
        fixTimeStamps(infos.data.result.series, 21600000);
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
    data: {"result": {"minY": 82.0, "minX": 13.0, "maxY": 1690.5, "series": [{"data": [[65.0, 175.0], [34.0, 1690.5], [40.0, 132.5], [95.0, 431.0], [46.0, 101.5], [103.0, 1469.0], [50.0, 225.5], [13.0, 286.0], [54.0, 82.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 103.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 59.5, "minX": 13.0, "maxY": 1616.0, "series": [{"data": [[65.0, 105.0], [34.0, 1616.0], [40.0, 93.0], [95.0, 396.0], [46.0, 68.0], [103.0, 1375.0], [50.0, 170.0], [13.0, 209.0], [54.0, 59.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 103.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.64138694E12, "maxY": 8.333333333333334, "series": [{"data": [[1.64138694E12, 8.333333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64138694E12, "title": "Hits Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 21600000);
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.64138694E12, "maxY": 8.333333333333334, "series": [{"data": [[1.64138694E12, 8.333333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64138694E12, "title": "Codes Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 21600000);
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.64138694E12, "maxY": 8.333333333333334, "series": [{"data": [[1.64138694E12, 8.333333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64138694E12, "title": "Transactions Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 21600000);
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.64138694E12, "maxY": 8.333333333333334, "series": [{"data": [[1.64138694E12, 8.333333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64138694E12, "title": "Total Transactions Per Second"}},
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
        fixTimeStamps(infos.data.result.series, 21600000);
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

