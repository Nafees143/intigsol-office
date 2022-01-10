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
        data: {"result": {"minY": 2109.0, "minX": 0.0, "maxY": 11810.0, "series": [{"data": [[0.0, 2109.0], [0.1, 2109.0], [0.2, 2109.0], [0.3, 2109.0], [0.4, 2109.0], [0.5, 2109.0], [0.6, 2109.0], [0.7, 2130.0], [0.8, 2130.0], [0.9, 2130.0], [1.0, 2130.0], [1.1, 2130.0], [1.2, 2130.0], [1.3, 2130.0], [1.4, 2190.0], [1.5, 2190.0], [1.6, 2190.0], [1.7, 2190.0], [1.8, 2190.0], [1.9, 2190.0], [2.0, 2309.0], [2.1, 2309.0], [2.2, 2309.0], [2.3, 2309.0], [2.4, 2309.0], [2.5, 2309.0], [2.6, 2309.0], [2.7, 2341.0], [2.8, 2341.0], [2.9, 2341.0], [3.0, 2341.0], [3.1, 2341.0], [3.2, 2341.0], [3.3, 2341.0], [3.4, 2513.0], [3.5, 2513.0], [3.6, 2513.0], [3.7, 2513.0], [3.8, 2513.0], [3.9, 2513.0], [4.0, 2520.0], [4.1, 2520.0], [4.2, 2520.0], [4.3, 2520.0], [4.4, 2520.0], [4.5, 2520.0], [4.6, 2520.0], [4.7, 2534.0], [4.8, 2534.0], [4.9, 2534.0], [5.0, 2534.0], [5.1, 2534.0], [5.2, 2534.0], [5.3, 2534.0], [5.4, 2545.0], [5.5, 2545.0], [5.6, 2545.0], [5.7, 2545.0], [5.8, 2545.0], [5.9, 2545.0], [6.0, 2643.0], [6.1, 2643.0], [6.2, 2643.0], [6.3, 2643.0], [6.4, 2643.0], [6.5, 2643.0], [6.6, 2643.0], [6.7, 2720.0], [6.8, 2720.0], [6.9, 2720.0], [7.0, 2720.0], [7.1, 2720.0], [7.2, 2720.0], [7.3, 2720.0], [7.4, 2798.0], [7.5, 2798.0], [7.6, 2798.0], [7.7, 2798.0], [7.8, 2798.0], [7.9, 2798.0], [8.0, 2801.0], [8.1, 2801.0], [8.2, 2801.0], [8.3, 2801.0], [8.4, 2801.0], [8.5, 2801.0], [8.6, 2801.0], [8.7, 2816.0], [8.8, 2816.0], [8.9, 2816.0], [9.0, 2816.0], [9.1, 2816.0], [9.2, 2816.0], [9.3, 2816.0], [9.4, 2830.0], [9.5, 2830.0], [9.6, 2830.0], [9.7, 2830.0], [9.8, 2830.0], [9.9, 2830.0], [10.0, 2833.0], [10.1, 2833.0], [10.2, 2833.0], [10.3, 2833.0], [10.4, 2833.0], [10.5, 2833.0], [10.6, 2833.0], [10.7, 2861.0], [10.8, 2861.0], [10.9, 2861.0], [11.0, 2861.0], [11.1, 2861.0], [11.2, 2861.0], [11.3, 2861.0], [11.4, 2940.0], [11.5, 2940.0], [11.6, 2940.0], [11.7, 2940.0], [11.8, 2940.0], [11.9, 2940.0], [12.0, 2945.0], [12.1, 2945.0], [12.2, 2945.0], [12.3, 2945.0], [12.4, 2945.0], [12.5, 2945.0], [12.6, 2945.0], [12.7, 2953.0], [12.8, 2953.0], [12.9, 2953.0], [13.0, 2953.0], [13.1, 2953.0], [13.2, 2953.0], [13.3, 2953.0], [13.4, 3007.0], [13.5, 3007.0], [13.6, 3007.0], [13.7, 3007.0], [13.8, 3007.0], [13.9, 3007.0], [14.0, 3021.0], [14.1, 3021.0], [14.2, 3021.0], [14.3, 3021.0], [14.4, 3021.0], [14.5, 3021.0], [14.6, 3021.0], [14.7, 3051.0], [14.8, 3051.0], [14.9, 3051.0], [15.0, 3051.0], [15.1, 3051.0], [15.2, 3051.0], [15.3, 3051.0], [15.4, 3089.0], [15.5, 3089.0], [15.6, 3089.0], [15.7, 3089.0], [15.8, 3089.0], [15.9, 3089.0], [16.0, 3099.0], [16.1, 3099.0], [16.2, 3099.0], [16.3, 3099.0], [16.4, 3099.0], [16.5, 3099.0], [16.6, 3099.0], [16.7, 3101.0], [16.8, 3101.0], [16.9, 3101.0], [17.0, 3101.0], [17.1, 3101.0], [17.2, 3101.0], [17.3, 3101.0], [17.4, 3127.0], [17.5, 3127.0], [17.6, 3127.0], [17.7, 3127.0], [17.8, 3127.0], [17.9, 3127.0], [18.0, 3134.0], [18.1, 3134.0], [18.2, 3134.0], [18.3, 3134.0], [18.4, 3134.0], [18.5, 3134.0], [18.6, 3134.0], [18.7, 3152.0], [18.8, 3152.0], [18.9, 3152.0], [19.0, 3152.0], [19.1, 3152.0], [19.2, 3152.0], [19.3, 3152.0], [19.4, 3162.0], [19.5, 3162.0], [19.6, 3162.0], [19.7, 3162.0], [19.8, 3162.0], [19.9, 3162.0], [20.0, 3162.0], [20.1, 3162.0], [20.2, 3162.0], [20.3, 3162.0], [20.4, 3162.0], [20.5, 3162.0], [20.6, 3162.0], [20.7, 3181.0], [20.8, 3181.0], [20.9, 3181.0], [21.0, 3181.0], [21.1, 3181.0], [21.2, 3181.0], [21.3, 3181.0], [21.4, 3187.0], [21.5, 3187.0], [21.6, 3187.0], [21.7, 3187.0], [21.8, 3187.0], [21.9, 3187.0], [22.0, 3201.0], [22.1, 3201.0], [22.2, 3201.0], [22.3, 3201.0], [22.4, 3201.0], [22.5, 3201.0], [22.6, 3201.0], [22.7, 3212.0], [22.8, 3212.0], [22.9, 3212.0], [23.0, 3212.0], [23.1, 3212.0], [23.2, 3212.0], [23.3, 3212.0], [23.4, 3257.0], [23.5, 3257.0], [23.6, 3257.0], [23.7, 3257.0], [23.8, 3257.0], [23.9, 3257.0], [24.0, 3257.0], [24.1, 3265.0], [24.2, 3265.0], [24.3, 3265.0], [24.4, 3265.0], [24.5, 3265.0], [24.6, 3265.0], [24.7, 3301.0], [24.8, 3301.0], [24.9, 3301.0], [25.0, 3301.0], [25.1, 3301.0], [25.2, 3301.0], [25.3, 3301.0], [25.4, 3317.0], [25.5, 3317.0], [25.6, 3317.0], [25.7, 3317.0], [25.8, 3317.0], [25.9, 3317.0], [26.0, 3317.0], [26.1, 3351.0], [26.2, 3351.0], [26.3, 3351.0], [26.4, 3351.0], [26.5, 3351.0], [26.6, 3351.0], [26.7, 3356.0], [26.8, 3356.0], [26.9, 3356.0], [27.0, 3356.0], [27.1, 3356.0], [27.2, 3356.0], [27.3, 3356.0], [27.4, 3385.0], [27.5, 3385.0], [27.6, 3385.0], [27.7, 3385.0], [27.8, 3385.0], [27.9, 3385.0], [28.0, 3385.0], [28.1, 3422.0], [28.2, 3422.0], [28.3, 3422.0], [28.4, 3422.0], [28.5, 3422.0], [28.6, 3422.0], [28.7, 3439.0], [28.8, 3439.0], [28.9, 3439.0], [29.0, 3439.0], [29.1, 3439.0], [29.2, 3439.0], [29.3, 3439.0], [29.4, 3474.0], [29.5, 3474.0], [29.6, 3474.0], [29.7, 3474.0], [29.8, 3474.0], [29.9, 3474.0], [30.0, 3474.0], [30.1, 3498.0], [30.2, 3498.0], [30.3, 3498.0], [30.4, 3498.0], [30.5, 3498.0], [30.6, 3498.0], [30.7, 3503.0], [30.8, 3503.0], [30.9, 3503.0], [31.0, 3503.0], [31.1, 3503.0], [31.2, 3503.0], [31.3, 3503.0], [31.4, 3534.0], [31.5, 3534.0], [31.6, 3534.0], [31.7, 3534.0], [31.8, 3534.0], [31.9, 3534.0], [32.0, 3534.0], [32.1, 3565.0], [32.2, 3565.0], [32.3, 3565.0], [32.4, 3565.0], [32.5, 3565.0], [32.6, 3565.0], [32.7, 3574.0], [32.8, 3574.0], [32.9, 3574.0], [33.0, 3574.0], [33.1, 3574.0], [33.2, 3574.0], [33.3, 3574.0], [33.4, 3609.0], [33.5, 3609.0], [33.6, 3609.0], [33.7, 3609.0], [33.8, 3609.0], [33.9, 3609.0], [34.0, 3609.0], [34.1, 3618.0], [34.2, 3618.0], [34.3, 3618.0], [34.4, 3618.0], [34.5, 3618.0], [34.6, 3618.0], [34.7, 3645.0], [34.8, 3645.0], [34.9, 3645.0], [35.0, 3645.0], [35.1, 3645.0], [35.2, 3645.0], [35.3, 3645.0], [35.4, 3674.0], [35.5, 3674.0], [35.6, 3674.0], [35.7, 3674.0], [35.8, 3674.0], [35.9, 3674.0], [36.0, 3685.0], [36.1, 3685.0], [36.2, 3685.0], [36.3, 3685.0], [36.4, 3685.0], [36.5, 3685.0], [36.6, 3685.0], [36.7, 3697.0], [36.8, 3697.0], [36.9, 3697.0], [37.0, 3697.0], [37.1, 3697.0], [37.2, 3697.0], [37.3, 3697.0], [37.4, 3771.0], [37.5, 3771.0], [37.6, 3771.0], [37.7, 3771.0], [37.8, 3771.0], [37.9, 3771.0], [38.0, 3793.0], [38.1, 3793.0], [38.2, 3793.0], [38.3, 3793.0], [38.4, 3793.0], [38.5, 3793.0], [38.6, 3793.0], [38.7, 3810.0], [38.8, 3810.0], [38.9, 3810.0], [39.0, 3810.0], [39.1, 3810.0], [39.2, 3810.0], [39.3, 3810.0], [39.4, 3835.0], [39.5, 3835.0], [39.6, 3835.0], [39.7, 3835.0], [39.8, 3835.0], [39.9, 3835.0], [40.0, 3839.0], [40.1, 3839.0], [40.2, 3839.0], [40.3, 3839.0], [40.4, 3839.0], [40.5, 3839.0], [40.6, 3839.0], [40.7, 3885.0], [40.8, 3885.0], [40.9, 3885.0], [41.0, 3885.0], [41.1, 3885.0], [41.2, 3885.0], [41.3, 3885.0], [41.4, 3902.0], [41.5, 3902.0], [41.6, 3902.0], [41.7, 3902.0], [41.8, 3902.0], [41.9, 3902.0], [42.0, 3911.0], [42.1, 3911.0], [42.2, 3911.0], [42.3, 3911.0], [42.4, 3911.0], [42.5, 3911.0], [42.6, 3911.0], [42.7, 3946.0], [42.8, 3946.0], [42.9, 3946.0], [43.0, 3946.0], [43.1, 3946.0], [43.2, 3946.0], [43.3, 3946.0], [43.4, 3946.0], [43.5, 3946.0], [43.6, 3946.0], [43.7, 3946.0], [43.8, 3946.0], [43.9, 3946.0], [44.0, 3961.0], [44.1, 3961.0], [44.2, 3961.0], [44.3, 3961.0], [44.4, 3961.0], [44.5, 3961.0], [44.6, 3961.0], [44.7, 3970.0], [44.8, 3970.0], [44.9, 3970.0], [45.0, 3970.0], [45.1, 3970.0], [45.2, 3970.0], [45.3, 3970.0], [45.4, 3973.0], [45.5, 3973.0], [45.6, 3973.0], [45.7, 3973.0], [45.8, 3973.0], [45.9, 3973.0], [46.0, 4015.0], [46.1, 4015.0], [46.2, 4015.0], [46.3, 4015.0], [46.4, 4015.0], [46.5, 4015.0], [46.6, 4015.0], [46.7, 4021.0], [46.8, 4021.0], [46.9, 4021.0], [47.0, 4021.0], [47.1, 4021.0], [47.2, 4021.0], [47.3, 4021.0], [47.4, 4039.0], [47.5, 4039.0], [47.6, 4039.0], [47.7, 4039.0], [47.8, 4039.0], [47.9, 4039.0], [48.0, 4039.0], [48.1, 4039.0], [48.2, 4039.0], [48.3, 4039.0], [48.4, 4039.0], [48.5, 4039.0], [48.6, 4039.0], [48.7, 4045.0], [48.8, 4045.0], [48.9, 4045.0], [49.0, 4045.0], [49.1, 4045.0], [49.2, 4045.0], [49.3, 4045.0], [49.4, 4059.0], [49.5, 4059.0], [49.6, 4059.0], [49.7, 4059.0], [49.8, 4059.0], [49.9, 4059.0], [50.0, 4083.0], [50.1, 4083.0], [50.2, 4083.0], [50.3, 4083.0], [50.4, 4083.0], [50.5, 4083.0], [50.6, 4083.0], [50.7, 4087.0], [50.8, 4087.0], [50.9, 4087.0], [51.0, 4087.0], [51.1, 4087.0], [51.2, 4087.0], [51.3, 4087.0], [51.4, 4090.0], [51.5, 4090.0], [51.6, 4090.0], [51.7, 4090.0], [51.8, 4090.0], [51.9, 4090.0], [52.0, 4119.0], [52.1, 4119.0], [52.2, 4119.0], [52.3, 4119.0], [52.4, 4119.0], [52.5, 4119.0], [52.6, 4119.0], [52.7, 4136.0], [52.8, 4136.0], [52.9, 4136.0], [53.0, 4136.0], [53.1, 4136.0], [53.2, 4136.0], [53.3, 4136.0], [53.4, 4138.0], [53.5, 4138.0], [53.6, 4138.0], [53.7, 4138.0], [53.8, 4138.0], [53.9, 4138.0], [54.0, 4167.0], [54.1, 4167.0], [54.2, 4167.0], [54.3, 4167.0], [54.4, 4167.0], [54.5, 4167.0], [54.6, 4167.0], [54.7, 4176.0], [54.8, 4176.0], [54.9, 4176.0], [55.0, 4176.0], [55.1, 4176.0], [55.2, 4176.0], [55.3, 4176.0], [55.4, 4236.0], [55.5, 4236.0], [55.6, 4236.0], [55.7, 4236.0], [55.8, 4236.0], [55.9, 4236.0], [56.0, 4257.0], [56.1, 4257.0], [56.2, 4257.0], [56.3, 4257.0], [56.4, 4257.0], [56.5, 4257.0], [56.6, 4257.0], [56.7, 4366.0], [56.8, 4366.0], [56.9, 4366.0], [57.0, 4366.0], [57.1, 4366.0], [57.2, 4366.0], [57.3, 4366.0], [57.4, 4392.0], [57.5, 4392.0], [57.6, 4392.0], [57.7, 4392.0], [57.8, 4392.0], [57.9, 4392.0], [58.0, 4394.0], [58.1, 4394.0], [58.2, 4394.0], [58.3, 4394.0], [58.4, 4394.0], [58.5, 4394.0], [58.6, 4394.0], [58.7, 4394.0], [58.8, 4394.0], [58.9, 4394.0], [59.0, 4394.0], [59.1, 4394.0], [59.2, 4394.0], [59.3, 4394.0], [59.4, 4425.0], [59.5, 4425.0], [59.6, 4425.0], [59.7, 4425.0], [59.8, 4425.0], [59.9, 4425.0], [60.0, 4431.0], [60.1, 4431.0], [60.2, 4431.0], [60.3, 4431.0], [60.4, 4431.0], [60.5, 4431.0], [60.6, 4431.0], [60.7, 4432.0], [60.8, 4432.0], [60.9, 4432.0], [61.0, 4432.0], [61.1, 4432.0], [61.2, 4432.0], [61.3, 4432.0], [61.4, 4475.0], [61.5, 4475.0], [61.6, 4475.0], [61.7, 4475.0], [61.8, 4475.0], [61.9, 4475.0], [62.0, 4514.0], [62.1, 4514.0], [62.2, 4514.0], [62.3, 4514.0], [62.4, 4514.0], [62.5, 4514.0], [62.6, 4514.0], [62.7, 4517.0], [62.8, 4517.0], [62.9, 4517.0], [63.0, 4517.0], [63.1, 4517.0], [63.2, 4517.0], [63.3, 4517.0], [63.4, 4552.0], [63.5, 4552.0], [63.6, 4552.0], [63.7, 4552.0], [63.8, 4552.0], [63.9, 4552.0], [64.0, 4582.0], [64.1, 4582.0], [64.2, 4582.0], [64.3, 4582.0], [64.4, 4582.0], [64.5, 4582.0], [64.6, 4582.0], [64.7, 4590.0], [64.8, 4590.0], [64.9, 4590.0], [65.0, 4590.0], [65.1, 4590.0], [65.2, 4590.0], [65.3, 4590.0], [65.4, 4605.0], [65.5, 4605.0], [65.6, 4605.0], [65.7, 4605.0], [65.8, 4605.0], [65.9, 4605.0], [66.0, 4614.0], [66.1, 4614.0], [66.2, 4614.0], [66.3, 4614.0], [66.4, 4614.0], [66.5, 4614.0], [66.6, 4614.0], [66.7, 4619.0], [66.8, 4619.0], [66.9, 4619.0], [67.0, 4619.0], [67.1, 4619.0], [67.2, 4619.0], [67.3, 4619.0], [67.4, 4646.0], [67.5, 4646.0], [67.6, 4646.0], [67.7, 4646.0], [67.8, 4646.0], [67.9, 4646.0], [68.0, 4725.0], [68.1, 4725.0], [68.2, 4725.0], [68.3, 4725.0], [68.4, 4725.0], [68.5, 4725.0], [68.6, 4725.0], [68.7, 4731.0], [68.8, 4731.0], [68.9, 4731.0], [69.0, 4731.0], [69.1, 4731.0], [69.2, 4731.0], [69.3, 4731.0], [69.4, 4752.0], [69.5, 4752.0], [69.6, 4752.0], [69.7, 4752.0], [69.8, 4752.0], [69.9, 4752.0], [70.0, 4781.0], [70.1, 4781.0], [70.2, 4781.0], [70.3, 4781.0], [70.4, 4781.0], [70.5, 4781.0], [70.6, 4781.0], [70.7, 4791.0], [70.8, 4791.0], [70.9, 4791.0], [71.0, 4791.0], [71.1, 4791.0], [71.2, 4791.0], [71.3, 4791.0], [71.4, 4801.0], [71.5, 4801.0], [71.6, 4801.0], [71.7, 4801.0], [71.8, 4801.0], [71.9, 4801.0], [72.0, 4819.0], [72.1, 4819.0], [72.2, 4819.0], [72.3, 4819.0], [72.4, 4819.0], [72.5, 4819.0], [72.6, 4819.0], [72.7, 4874.0], [72.8, 4874.0], [72.9, 4874.0], [73.0, 4874.0], [73.1, 4874.0], [73.2, 4874.0], [73.3, 4874.0], [73.4, 4883.0], [73.5, 4883.0], [73.6, 4883.0], [73.7, 4883.0], [73.8, 4883.0], [73.9, 4883.0], [74.0, 4889.0], [74.1, 4889.0], [74.2, 4889.0], [74.3, 4889.0], [74.4, 4889.0], [74.5, 4889.0], [74.6, 4889.0], [74.7, 5002.0], [74.8, 5002.0], [74.9, 5002.0], [75.0, 5002.0], [75.1, 5002.0], [75.2, 5002.0], [75.3, 5002.0], [75.4, 5028.0], [75.5, 5028.0], [75.6, 5028.0], [75.7, 5028.0], [75.8, 5028.0], [75.9, 5028.0], [76.0, 5029.0], [76.1, 5029.0], [76.2, 5029.0], [76.3, 5029.0], [76.4, 5029.0], [76.5, 5029.0], [76.6, 5029.0], [76.7, 5034.0], [76.8, 5034.0], [76.9, 5034.0], [77.0, 5034.0], [77.1, 5034.0], [77.2, 5034.0], [77.3, 5034.0], [77.4, 5052.0], [77.5, 5052.0], [77.6, 5052.0], [77.7, 5052.0], [77.8, 5052.0], [77.9, 5052.0], [78.0, 5052.0], [78.1, 5077.0], [78.2, 5077.0], [78.3, 5077.0], [78.4, 5077.0], [78.5, 5077.0], [78.6, 5077.0], [78.7, 5111.0], [78.8, 5111.0], [78.9, 5111.0], [79.0, 5111.0], [79.1, 5111.0], [79.2, 5111.0], [79.3, 5111.0], [79.4, 5219.0], [79.5, 5219.0], [79.6, 5219.0], [79.7, 5219.0], [79.8, 5219.0], [79.9, 5219.0], [80.0, 5219.0], [80.1, 5271.0], [80.2, 5271.0], [80.3, 5271.0], [80.4, 5271.0], [80.5, 5271.0], [80.6, 5271.0], [80.7, 5288.0], [80.8, 5288.0], [80.9, 5288.0], [81.0, 5288.0], [81.1, 5288.0], [81.2, 5288.0], [81.3, 5288.0], [81.4, 5353.0], [81.5, 5353.0], [81.6, 5353.0], [81.7, 5353.0], [81.8, 5353.0], [81.9, 5353.0], [82.0, 5353.0], [82.1, 5365.0], [82.2, 5365.0], [82.3, 5365.0], [82.4, 5365.0], [82.5, 5365.0], [82.6, 5365.0], [82.7, 5395.0], [82.8, 5395.0], [82.9, 5395.0], [83.0, 5395.0], [83.1, 5395.0], [83.2, 5395.0], [83.3, 5395.0], [83.4, 5496.0], [83.5, 5496.0], [83.6, 5496.0], [83.7, 5496.0], [83.8, 5496.0], [83.9, 5496.0], [84.0, 5496.0], [84.1, 5601.0], [84.2, 5601.0], [84.3, 5601.0], [84.4, 5601.0], [84.5, 5601.0], [84.6, 5601.0], [84.7, 5606.0], [84.8, 5606.0], [84.9, 5606.0], [85.0, 5606.0], [85.1, 5606.0], [85.2, 5606.0], [85.3, 5606.0], [85.4, 5675.0], [85.5, 5675.0], [85.6, 5675.0], [85.7, 5675.0], [85.8, 5675.0], [85.9, 5675.0], [86.0, 5675.0], [86.1, 5724.0], [86.2, 5724.0], [86.3, 5724.0], [86.4, 5724.0], [86.5, 5724.0], [86.6, 5724.0], [86.7, 5819.0], [86.8, 5819.0], [86.9, 5819.0], [87.0, 5819.0], [87.1, 5819.0], [87.2, 5819.0], [87.3, 5819.0], [87.4, 5918.0], [87.5, 5918.0], [87.6, 5918.0], [87.7, 5918.0], [87.8, 5918.0], [87.9, 5918.0], [88.0, 5918.0], [88.1, 5927.0], [88.2, 5927.0], [88.3, 5927.0], [88.4, 5927.0], [88.5, 5927.0], [88.6, 5927.0], [88.7, 5933.0], [88.8, 5933.0], [88.9, 5933.0], [89.0, 5933.0], [89.1, 5933.0], [89.2, 5933.0], [89.3, 5933.0], [89.4, 6040.0], [89.5, 6040.0], [89.6, 6040.0], [89.7, 6040.0], [89.8, 6040.0], [89.9, 6040.0], [90.0, 6040.0], [90.1, 6128.0], [90.2, 6128.0], [90.3, 6128.0], [90.4, 6128.0], [90.5, 6128.0], [90.6, 6128.0], [90.7, 6249.0], [90.8, 6249.0], [90.9, 6249.0], [91.0, 6249.0], [91.1, 6249.0], [91.2, 6249.0], [91.3, 6249.0], [91.4, 6282.0], [91.5, 6282.0], [91.6, 6282.0], [91.7, 6282.0], [91.8, 6282.0], [91.9, 6282.0], [92.0, 6282.0], [92.1, 6398.0], [92.2, 6398.0], [92.3, 6398.0], [92.4, 6398.0], [92.5, 6398.0], [92.6, 6398.0], [92.7, 6538.0], [92.8, 6538.0], [92.9, 6538.0], [93.0, 6538.0], [93.1, 6538.0], [93.2, 6538.0], [93.3, 6538.0], [93.4, 6870.0], [93.5, 6870.0], [93.6, 6870.0], [93.7, 6870.0], [93.8, 6870.0], [93.9, 6870.0], [94.0, 6870.0], [94.1, 6960.0], [94.2, 6960.0], [94.3, 6960.0], [94.4, 6960.0], [94.5, 6960.0], [94.6, 6960.0], [94.7, 7119.0], [94.8, 7119.0], [94.9, 7119.0], [95.0, 7119.0], [95.1, 7119.0], [95.2, 7119.0], [95.3, 7119.0], [95.4, 7347.0], [95.5, 7347.0], [95.6, 7347.0], [95.7, 7347.0], [95.8, 7347.0], [95.9, 7347.0], [96.0, 7347.0], [96.1, 7683.0], [96.2, 7683.0], [96.3, 7683.0], [96.4, 7683.0], [96.5, 7683.0], [96.6, 7683.0], [96.7, 7820.0], [96.8, 7820.0], [96.9, 7820.0], [97.0, 7820.0], [97.1, 7820.0], [97.2, 7820.0], [97.3, 7820.0], [97.4, 11546.0], [97.5, 11546.0], [97.6, 11546.0], [97.7, 11546.0], [97.8, 11546.0], [97.9, 11546.0], [98.0, 11546.0], [98.1, 11674.0], [98.2, 11674.0], [98.3, 11674.0], [98.4, 11674.0], [98.5, 11674.0], [98.6, 11674.0], [98.7, 11741.0], [98.8, 11741.0], [98.9, 11741.0], [99.0, 11741.0], [99.1, 11741.0], [99.2, 11741.0], [99.3, 11741.0], [99.4, 11810.0], [99.5, 11810.0], [99.6, 11810.0], [99.7, 11810.0], [99.8, 11810.0], [99.9, 11810.0], [100.0, 11810.0]], "isOverall": false, "label": "greenland-bd-Request1(main)", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 2100.0, "maxY": 9.0, "series": [{"data": [[2100.0, 3.0], [2300.0, 2.0], [2500.0, 4.0], [2600.0, 1.0], [2800.0, 5.0], [2700.0, 2.0], [2900.0, 3.0], [3000.0, 5.0], [3100.0, 8.0], [3300.0, 5.0], [3200.0, 4.0], [3400.0, 4.0], [3500.0, 4.0], [3600.0, 6.0], [3700.0, 2.0], [3800.0, 4.0], [3900.0, 7.0], [4000.0, 9.0], [4100.0, 5.0], [4300.0, 4.0], [4200.0, 2.0], [4400.0, 4.0], [4600.0, 4.0], [4500.0, 5.0], [4700.0, 5.0], [4800.0, 5.0], [5000.0, 6.0], [5100.0, 1.0], [5300.0, 3.0], [5200.0, 3.0], [5600.0, 3.0], [5400.0, 1.0], [5700.0, 1.0], [5800.0, 1.0], [6100.0, 1.0], [5900.0, 3.0], [6000.0, 1.0], [6200.0, 2.0], [6300.0, 1.0], [6500.0, 1.0], [6900.0, 1.0], [6800.0, 1.0], [7100.0, 1.0], [7300.0, 1.0], [7600.0, 1.0], [7800.0, 1.0], [11500.0, 1.0], [11700.0, 1.0], [11600.0, 1.0], [11800.0, 1.0]], "isOverall": false, "label": "greenland-bd-Request1(main)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 11800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 4.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 146.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 146.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 4.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 44.406666666666666, "minX": 1.64161872E12, "maxY": 44.406666666666666, "series": [{"data": [[1.64161872E12, 44.406666666666666]], "isOverall": false, "label": "greenland-bd", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64161872E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 3070.0, "minX": 1.0, "maxY": 11810.0, "series": [{"data": [[2.0, 11810.0], [3.0, 11741.0], [4.0, 11546.0], [5.0, 7119.0], [6.0, 4087.0], [7.0, 7347.0], [9.0, 6070.5], [11.0, 6819.5], [13.0, 6340.0], [14.0, 3674.0], [16.0, 3926.0], [17.0, 4725.0], [21.0, 4368.75], [23.0, 5105.5], [24.0, 4801.0], [25.0, 4394.0], [26.0, 3911.0], [27.0, 4090.0], [28.0, 4015.0], [30.0, 5994.5], [32.0, 6283.0], [35.0, 4176.0], [34.0, 6083.5], [39.0, 3070.0], [38.0, 4771.666666666667], [41.0, 3618.5], [40.0, 3541.3333333333335], [43.0, 3399.333333333333], [42.0, 3582.4], [45.0, 3968.6666666666665], [44.0, 3326.5], [47.0, 4418.5], [46.0, 3762.3333333333335], [49.0, 4045.0], [48.0, 3704.5714285714284], [51.0, 3548.25], [50.0, 3822.0], [53.0, 3937.8], [52.0, 3620.5], [55.0, 5182.5], [54.0, 4423.0], [57.0, 4425.25], [56.0, 4169.0], [59.0, 4027.3333333333335], [58.0, 4008.0], [61.0, 3966.5], [60.0, 3786.3333333333335], [63.0, 3992.5], [62.0, 4366.0], [67.0, 4471.0], [66.0, 4171.5], [65.0, 4062.3333333333335], [64.0, 3797.0], [69.0, 4110.666666666667], [68.0, 4493.0], [71.0, 4138.0], [70.0, 4431.0], [1.0, 11674.0]], "isOverall": false, "label": "greenland-bd-Request1(main)", "isController": false}, {"data": [[44.406666666666666, 4402.380000000001]], "isOverall": false, "label": "greenland-bd-Request1(main)-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 71.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 294.43333333333334, "minX": 1.64161872E12, "maxY": 115980.33333333333, "series": [{"data": [[1.64161872E12, 115980.33333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.64161872E12, 294.43333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64161872E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 4402.380000000001, "minX": 1.64161872E12, "maxY": 4402.380000000001, "series": [{"data": [[1.64161872E12, 4402.380000000001]], "isOverall": false, "label": "greenland-bd-Request1(main)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64161872E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 2321.693333333333, "minX": 1.64161872E12, "maxY": 2321.693333333333, "series": [{"data": [[1.64161872E12, 2321.693333333333]], "isOverall": false, "label": "greenland-bd-Request1(main)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64161872E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 2015.3600000000001, "minX": 1.64161872E12, "maxY": 2015.3600000000001, "series": [{"data": [[1.64161872E12, 2015.3600000000001]], "isOverall": false, "label": "greenland-bd-Request1(main)", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64161872E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 2109.0, "minX": 1.64161872E12, "maxY": 7820.0, "series": [{"data": [[1.64161872E12, 7820.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.64161872E12, 5920.7]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.64161872E12, 7755.610000000001]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.64161872E12, 6489.000000000001]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.64161872E12, 2109.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.64161872E12, 4042.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64161872E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 3127.0, "minX": 1.0, "maxY": 11741.0, "series": [{"data": [[4.0, 4032.5], [8.0, 5483.0], [34.0, 3591.5], [9.0, 4646.0], [19.0, 5028.0], [6.0, 3238.5], [3.0, 3534.0], [28.0, 4842.0], [31.0, 3127.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 11546.0], [3.0, 11741.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 34.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 1.0, "maxY": 3069.5, "series": [{"data": [[4.0, 1813.0], [8.0, 2639.0], [34.0, 2167.5], [9.0, 1658.0], [19.0, 2962.0], [6.0, 2315.0], [3.0, 1668.0], [28.0, 3069.5], [31.0, 1713.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[1.0, 0.0], [3.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 34.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 2.5, "minX": 1.64161872E12, "maxY": 2.5, "series": [{"data": [[1.64161872E12, 2.5]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64161872E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.06666666666666667, "minX": 1.64161872E12, "maxY": 2.433333333333333, "series": [{"data": [[1.64161872E12, 2.433333333333333]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.64161872E12, 0.06666666666666667]], "isOverall": false, "label": "Non HTTP response code: javax.net.ssl.SSLHandshakeException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64161872E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.06666666666666667, "minX": 1.64161872E12, "maxY": 2.433333333333333, "series": [{"data": [[1.64161872E12, 0.06666666666666667]], "isOverall": false, "label": "greenland-bd-Request1(main)-failure", "isController": false}, {"data": [[1.64161872E12, 2.433333333333333]], "isOverall": false, "label": "greenland-bd-Request1(main)-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64161872E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.06666666666666667, "minX": 1.64161872E12, "maxY": 2.433333333333333, "series": [{"data": [[1.64161872E12, 2.433333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.64161872E12, 0.06666666666666667]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64161872E12, "title": "Total Transactions Per Second"}},
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

