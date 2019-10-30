
export default {
  today: {
    date: new Date().getDate(),
    month: new Date().getMonth() + 1,
    day: new Date().getDay() + 1,
    year: new Date().getFullYear(),
    fullDate: function () {
      // return `${this.today.year}-${this.today.month < 0 ? '0' + this.today.month : this.today.month}-${this.today.date < 0 ? '0' + this.today.date : this.today.date}`;
      return `${this.today.year}-${this.today.month}-${this.today.date}`;

    }
  },

  monDays(year, month) {//计算某一年的某一个月有多少天
    var obj = {
      "1": 31,
      "3": 31,
      "4": 30,
      "5": 31,
      "6": 30,
      "7": 31,
      "8": 31,
      "9": 30,
      "10": 31,
      "11": 30,
      "12": 31
    };
    //判断年是不是闰年，以此来计算该年2月有多少天

    obj["2"] = this.isLeapYear(year) ? 29 : 28;

    return obj["" + month];
  },
  yearDays(year) {//计算某一年有多少天
    return this.getLeapYear(year) ? 366 : 365;
  },
  isLeapYear: function (year) {//计算某年是不是闰年
    if (year % 4 == 0 && year % 100 != 0) {
      return true;
    } else if (year % 400 == 0) {
      return true;
    } else {
      return false;
    }

  },
  calDate: function (date, days) {//
    /*
    根据某一天的日期，计算几天前或几天后的日期
    参数说明：
     date: 字符串类型 格式："2019-10-26"
     days:为负数，代表计算几天前的日期；为正数，表示计算几天后的日期
     
     */

    var arr = date.split("-");

    var time = new Date().setFullYear(parseInt(arr[0]), parseInt(arr[1]) - 1, parseInt(arr[2]));
    var millis = time + (days * 24 * 60 * 60 * 1000);//计算加减N天以后的毫秒数
    time = new Date(millis);
    var m = time.getMonth() + 1;//Date.getMonth() 的值是0-11之间，取不到12。所以给用户看到的日期就要在getMonth()的取值上+1，代表通俗上看到的月份
    var d = time.getDate();//代表某日

    // return `${time.getFullYear()}-${m < 10 ? '0' + m : m}-${d < 10 ? '0' + d : d}`;
    return `${time.getFullYear()}-${m}-${d}`;
  },
  calWeekDay: function (date) {//根据日期计算星期几
    /*
    根据某一天的日期，计算几天前或几天后的日期
    参数说明：
     date: 字符串类型 格式："2019-10-26"
     days:为负数，代表计算几天前的日期；为正数，表示计算几天后的日期
     */

    var arr = date.split("-");

    var time = new Date().setFullYear(parseInt(arr[0]), parseInt(arr[1]) - 1, parseInt(arr[2]));//转为为日期类型
    var weekDay = [7, 1, 2, 3, 4, 5, 6];//用来保存星期天，星期一......
 
    var day = new Date(time).getDay();//通过getDay()获取的值，为0时，是星期日，为一时，代表星期一，依次类推

    return weekDay[day];

  },
  fullDate: function (year, month, date) {
    // return year + "-" + (month < 10 ? '0' + momth : month) + "-" + (date < 10 ? '0' + date : date);
    return year + "-" + month + "-" + date;
  },
  getTimeType: function (date) {
    /*根据某一日期，获取时间单位，每个时间单位都是整数类型
    参数：
    date:字符串类型 格式："2019-10-26"
    */

    var arr = date.split("-");

    return {
      year: parseInt(arr[0]),
      month: parseInt(arr[1]),
      date: parseInt(arr[2])
    };

  }
};



