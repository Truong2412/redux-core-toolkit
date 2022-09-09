import React from 'react';

function Doc(props) {
    return (
        <div style={{fontSize: "1.2rem"}}>
            <p></p>
            <p> npm i redux react-redux</p>
            <p>B1 Tạo store: "/app/store.js" </p>
            <p>B2 Tại index.js import và bọc app  = thẻ Provider </p>
            <p>B3 Tạo reducers "/app/reducers" </p>
            <p>+ initState chứa các state của cả app cần dùng chung </p>
            <p>+ tạo các reducer xử lý action.type và return state (use mutate state---[ redux/toolkit không cần clone mà cập nhật luôn ]) </p>
            <p>B4 Tạo action "/app/actions" chứa type và payload (data cần truyền vào)</p>
            <p>B5 tại UI import "action" cần dùng, tạo 1 event triggle đến action = useDispatch() , và truyền vào payload (data truyền đến cho reducer cập nhật)</p>
            <p>B6 tại component cần hiển thị hoặc sử dụng sử dụng useSelector(state=>state cần lấy) </p>
        </div>
    );
}

export default Doc;