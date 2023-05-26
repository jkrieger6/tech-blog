module.exports = {
    formatTime: (date) => {
      return date.toLocaleTimeString();
    },
    formatDate: (date) => {
      return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${
        new Date(date).getFullYear()
      }`;
    },
  };