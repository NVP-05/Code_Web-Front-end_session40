let formElement = document.querySelector("#form");
let inputElement = document.querySelector("inputValue");
let listJob = JSON.parse(localStorage.getItem("jobs")) || [];
let ulElement = document.querySelector("#listJob");

function render() {
  let ulHtmls = listJob.map(function (job) {
    return `
        <li>
        <span>${job.name}</span>
        <button>Sửa</button>
        <button>Xóa</button>
        </li>
        `;
  });

  // Chuyển đổi từ mảng thành chuỗi HTML
  const ulHtml = ulHtmls.join("");

  // Append chuỗi HTML vào trong DOM
  ulElement.innerHTML = ulHtml;
}
render();

/**
 * Hàm thêm mới công việc
 * Auth: NVPHUC (20/01/2024)
 */
function creatJob() {
  // Trong JS có bn giá trị mặc định là false: false, 0, null, NaN,
  if (!inputElement.value) {
    alert("Tên công việc không được để trống.");
  } else {
    // Tạo đối tượng newJob
    const newJob = {
      id: Math.ceil(Math.random() * 1000000000),
      name: inputElement.value,
      status: false,
    };
    listJob.push(newJob);
    // Lưu dữ liệu lên localStorger
    localStorage.setItem("jobs", JSON.stringify(listJob));
    // Clear giá trị trong ô input
    inputElement.value = "";

    // Gọi hàm render lại giao diện
    render();
  }
}

function deleteJob() {}

function updateJob() {}

// Lắng nghe sự kiện submit form
formElement.addEventListener("submit", function (event) {
  // Ngăn chặn sự kiện mặc định của form
  event.preventDefault();
  creatJob();
});

// Input: [1, 2, 3, 4] => Output = [2, 4, 6, 8]
// map(): Dùng để lặp qua các phần tử của mảng, trả về một mảng mới
// có số lượng phần tử = số lượng phần tử của mảng cũ nhưng đã được chỉnh sửa

// Session Storage
// Tạo session Storage
const userLogin = {
  id: 123,
  name: "Nguyễn Văn A",
};

sessionStorage.setItem("userLogin", JSON.stringify(userJson));
