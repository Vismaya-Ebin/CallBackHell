

const numberArray = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

setTimeout(() => {
  document.getElementById("container").innerHTML = numberArray[0];
  setTimeout(
    (id) => {
      document.getElementById("container").innerHTML = id;
      setTimeout(
        (id) => {
          document.getElementById("container").innerHTML = id;
          setTimeout(
            (id) => {
              document.getElementById("container").innerHTML = id;
              setTimeout(
                (id) => {
                  document.getElementById("container").innerHTML = id;
                  setTimeout(
                    (id) => {
                      document.getElementById("container").innerHTML = id;
                      setTimeout(
                        (id) => {
                          document.getElementById("container").innerHTML = id;
                          setTimeout(
                            (id) => {
                              document.getElementById("container").innerHTML =
                                id;
                              setTimeout(
                                (id) => {
                                  document.getElementById(
                                    "container"
                                  ).innerHTML = id;
                                  setTimeout(
                                    (id) => {
                                      document.getElementById(
                                        "container"
                                      ).innerHTML = id;
                                      setTimeout(() => {
                                        document.getElementById(
                                          "container"
                                        ).innerHTML =
                                          "HAPPY INDEPENDENCE DAY !!!!";
                                        document.getElementById(
                                          "container"
                                        ).style.color = "Green";
                                        document.getElementById(
                                          "container"
                                        ).style.textAlign = "center";
                                        document.getElementById(
                                          "container"
                                        ).style.fontSize = "35px";
                                      }, 500);
                                    },
                                    500,
                                    numberArray[9]
                                  );
                                },
                                500,
                                numberArray[8]
                              );
                            },
                            500,
                            numberArray[7]
                          );
                        },
                        500,
                        numberArray[6]
                      );
                    },
                    500,
                    numberArray[5]
                  );
                },
                500,
                numberArray[4]
              );
            },
            500,
            numberArray[3]
          );
        },
        500,
        numberArray[2]
      );
    },
    500,
    numberArray[1]
  );
}, 500);
