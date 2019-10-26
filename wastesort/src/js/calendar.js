
var obj = {
  today: {
    date: new Date().getDate(),
    month: new Date().getMonth() + 1,
    day: new Date().getDay() + 1,
    year: new Date().getFullYear(),
    fullDate: function () {
      return this.today.year + "-" + this.today.month + "-" + this.today.date;
    }
  },

  monDays(month, year) {//计算某一年的某一个月有多少天
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

    return `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()}`;
  },

  fullDate: function (year, month, date) {
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



