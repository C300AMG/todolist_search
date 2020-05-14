//==============================================================================================//
                    //=== Chức năng search Vuejs ==== // gõ đến đâu search đến đó
//==============================================================================================//
/* 

Bước 1 :Thu thập dl từ người dùng Tức là người dùng nhập j ở ô input thì bên app nhận dc và thay đổi
 tạo 1 biến có tên là strSearch, biến này để lưu tất cả dl mà người dùng nhập vào ô search
    --Từ component app dùng v-bind để ràng buộc biến strSearch vào bên trong component Search
    --( Chuyển đổi v-model thành v-bind + v-on:input )
        -- Trong compohnent App template ràng buộc v-bind cho 	<comp-controls  -> bên trong component controls khai báo props nhận dc
        -- Tiếp tục từ component controls truyền cái props vừa nhận dc vào cho thằng search(con)
            -- Đầu tiên dùng v-bind:stringSearch="stringSearch"></comp-controls> -> bên trong search(con) khai báo props y  như props dc khai báo ở controls
        -- Việc của mình là trong component search(con) ràng buộc giá trị đó(props vừa nhận) vào ô input bằng cách v-bind:value="strSearch"
        -- Và tạo tiếp v-on:input="handelSearch", khai báo handelSearch dưới methods nhận thêm biến event(e.target).Ok xong từ app->ssearch
        -- Bây giờ truyền ngược lại.Muốn app nhận dc event mà search(con) truyền qua thì, Đầu tiền biến event đó phải qua controls trước,
        --- bên control. <comp-Search-Controls khai báo cái event.v-on: = chính cái input của thằng con-> search(con) $emit('handlesearch')
    ---> suy ra bây giờ thằng Ápp dã nhận dc giá trị thay đổi từ thằng search(con)

Bước 2 : Clear search đơn giản truyển gia trị rỗng ra là ok
    -- Bước 1 tạo sự kiện click
    --Bước 2 :lấy giá trị emit của thằng search gán cho nó = clear


Bước 3 : search logic , khi người dùng nhập  giá trị vào input thì nó sẽ lọc ra từ data và render ra giá trị ở listItem
    Theo vuejs chỉ cần logic search để thay đổi array này thôi ko cần quan tâm đến cấu trúc dom, hệ thống phàn ứng tự động render lại
        - có nhiều cách sau : includes('Từ muốn chọn'),indexof, search :Biểu thức chính quy
        Bước 1 : var item = []



*/
