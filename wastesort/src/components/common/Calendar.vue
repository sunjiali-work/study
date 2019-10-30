<template>
  <div class="calendar">
    <div class="week">一</div>
    <div class="week">二</div>
    <div class="week">三</div>
    <div class="week">四</div>
    <div class="week">五</div>
    <div class="week">六</div>
    <div class="week">七</div>
    <div class="date" v-for="(item,i) of allDays" :key="i">
      <a href="javascript:;" :class="item.dayClass">{{item.date}}</a>
    </div>
  </div>
</template>
<script>
import DateCalculator from "../../js/calendar.js"; //引入日期相关的计算工具
export default {
  data() {
    return {
      allDays: [] //本页月历的35个日期
    };
  },
  created() {
    this.setDays();
  },
  methods: {
    setDays() {
      //     1.创建一个数组来存储35个日期 （5行7列=35天）
      var all = [];
      // 2.计算这个月一号是星期几
      // 获取当前的年月
      var today = DateCalculator.today; //today是个对象

      var firstDay = today.year + "-" + today.month + "-" + 1; //获取这个月1日的日期
      var weekDay = DateCalculator.calWeekDay(firstDay); //计算这个月一号是星期几

      // 3.然后计算这个月一共有多少天
      var monDaysThis = DateCalculator.monDays(today.year, today.month);

      // 4.这个月1日所在的那个星期，比如10月1日是在星期四，那么1号所在的这个星期，有几天是属于上个月。一个星期有七天，10月1日在星期四，可以得出有三天是属于9月份，如果10月1日在星期五，就有四天是属于9月份。到底有几天是属于上月，就是（10月1日的星期几-1）=上月在该星期占了多少天

      var lastMonthGapDays = weekDay - 1;

      // 那么循环遍历这几天，逐渐以10月1日为根据，每次循环减一天，添加进数组的最前面，直到循环结束。
      var i = lastMonthGapDays;
      while (i > 0) {
        //
        var lastDay = DateCalculator.calDate(firstDay, -1); //从这个月1日开始，-1，依次递减，计算10月1日以前的日子
        // 只需要天，不需要年月，并把它加进数组头部
        //每个数组元素是个对象，代表一天。对象的属性就是一天中的相关信息
        all.unshift({
          date: DateCalculator.getTimeType(lastDay).date, //d
          fullDate: lastDay, //yyyy-m-d,
          isToday: false, //是否是今天
          dayClass: {
            //如果是今天，就给今天加个圆形的蓝色背景的样式
            "date-btn": false
          },
          timeType: DateCalculator.getTimeType(lastDay) //日期类型
        });

        i--;
      }
      // 5.将本月的总天数作为循环条件，开始遍历，依次递增，日期+1，添加到数组末尾，直至循环结束。刚好循环到的是今天，加个变量，使得isTody为true，使得具备相应的class属性对应的样式
      var j = 0;

      while (j < monDaysThis) {
        var nextDay = DateCalculator.calDate(firstDay, j);
        var isToday = false;
        if (j == today.date - 1) {
          //循环过程中判断哪一天是今天。true就代表是今天
          //因为j=0，代表1号，j=1,代表2号；而today.day得到的值如果是1就代表1号，2就代表2号，和j所代表的的日期不一致。因此today.day-1
          isToday = true;
        }
        all.push({
          date: DateCalculator.getTimeType(nextDay).date, //d
          fullDate: nextDay, //yyyy-m-d,
          isToday: isToday, //是否是今天7
          dayClass: {
            //如果是今天，就给今天加个圆形的蓝色背景的样式
            "date-btn": isToday
          },
          timeType: DateCalculator.getTimeType(nextDay) //日期类型
        }); //0 代表这个月1号，1代表这个月2日，2代表这个月3日，直到j=monDaysThis-1,代表这个月最后一天.
        j++;
      }

      // 6.得到上个月的几天以及本月共有多少天后，就来计算下个月这当前这个35天里占有几天。35-这个月总天数-上个月末尾几天=下个月在35天里留有的几天
      var nextMonthGapDays = 35 - lastMonthGapDays - monDaysThis;
      // 然后循环遍历这几天，本月最后一天依次递增+1,添加到数组末尾，直到循环结束。就知道了这35天里的日子。

      //获取这个月最后一天的日期
      var lastDayThisMon = all[all.length - 1]["fullDate"]; //目前为止，数组中最后一个元素就是本月最后一天,但是数组的元素是个对象，封装了很多属性，要获得yyyy-m-d格式的日期，必须是lastDayThisMonth.fullDate才可以得到
      var h = 1; //初始值为1，因为上面已经把这个月最后一天追加到数组中了。已经存在最后一天。因此下面的循环不能再从0开始，再把这个月最后一天再添加进数组中。而是要把下个月第一天添加进数组中。因此h要初始化为1，第一次循环时，直接把下月第一天丢进数组
      while (h <= nextMonthGapDays) {
        var nextDaynextMonth = DateCalculator.calDate(lastDayThisMon, h); //计算下一天日期

        all.push({
          date: DateCalculator.getTimeType(nextDaynextMonth).date, //d
          fullDate: nextDaynextMonth, //yyyy-m-d,
          isToday: false, //是否是今天
          dayClass: {
            //如果是今天，就给今天加个圆形的蓝色背景的样式
            "date-btn": false
          },
          timeType: DateCalculator.getTimeType(nextDaynextMonth) //日期类型
        });
        h++;
      } //while循环结束

      //创建一个变量，用来保存今天的日期在这35个日期中的数组下标
      var today_index = "";
      //用来查找今天这个日期在35个日期中的下标
      all.forEach(function(item, index, arr) {
        if (item.date == today.date) {
          //循环时判断是不是今天

          //是今天，就把今天在35个日期中所在的下标位置赋值给变量today_index  注意：today.day是指周几，today.date是指日期
          today_index = index;
        }
      });

      //如果是今天之前的日子，字体颜色为灰色，是另一个样式属性before；如果是今天以后的日子，字体颜色为黑色，是future的样式属性
      for (var y = 0; y < all.length; y++) {
        if (y < today_index) {
          //就今天之前的日子
          all[y]["dayClass"]["before"] = true;
          all[y]["dayClass"]["future"] = false;
        } else if (y > today_index) {
          all[y]["dayClass"]["before"] = false;
          all[y]["dayClass"]["future"] = true;
        }
      }

      //获取到35个日期后，将数组all 赋值给数据模型中的变量allDays
      this.allDays = all;
    }
  }
};
</script>
<style  scoped>


/* 日历的容器 */
.calendar {
  background: #fff;
  width: 100%;
  height: 310px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border-radius: 8px;
  box-shadow: 0px 2px 10px rgba(51, 51, 51, 0.349019607843137);
}

/* 日期容器 ,周几*/
.date,
.week {
  width: 14%;
  height: 48px;
  line-height: 48px;
  text-align: center;
}

.week {
  color: #2bcddd;
  font-size: 12px;
  font-weight: bold;
}

.date > a {
  display: block;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin: 0 auto;
  text-align: center;
  line-height: 35px;
  font-size: 14px;
}

/* 日期按钮 */
.date > .date-btn {
  background: rgba(62, 210, 226, 1);
  color: #fff;
}

.date > .before {
  color: #ccc;
}

.date > .future {
  color: #333;
}
</style>