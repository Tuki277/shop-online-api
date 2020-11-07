// thêm sản phẩm theo danh mục đang bị lôi, chưa thêm được

// tạm thời bỏ qua phần danh mục, đăng mỗi sản phẩm thôi

<div class="col-auto my-1">
    <label class="mr-sm-2" for="list">Danh mục</label>
    <select class="custom-select mr-sm-2" name="list">
        <option selected>Chọn....</option>
        <% for (var i = 0; i < Category.length; i++) { %>
        <option value="<%= Category[i]._id %>"><%= Category[i].name %></option>
        <% } %>
    </select>
</div>

// báo cáo lỗi
// thiếu chức năng sửa xóa của web