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


bugs issue
---------------------------------------------------------------------------------------

// báo cáo lỗi ( cần fix )
    + thử lưu cái getcart vào rồi làm như cái templates cart xem có lấy đc ra không

// thiếu chức năng sửa xóa của web

// hoàn thành chức năng sửa xóa cho sản phẩm

// hoàn thành chức năng bỏ sản phẩm cho người dùng

// hoàn thành chức năng login đối với admin