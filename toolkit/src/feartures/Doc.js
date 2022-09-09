import React from 'react';

function Doc(props) {
    return (
        <div style={{fontSize: "1.2rem"}}>
            <p></p>
            <p> npm i redux react-redux @reduxjs/toolkit</p>
            <p style={{color: "red"}}>
                 hàm cần đọc : configureStore, createSlice
            </p>
            <p style={{color: "red"}}>
                 Ưu điểm của toolkit : Ngắn hơn, cập nhật trực tiếp state, createSlice bao gồm cả action, reducers
                 Dễ quản lý cho từng feartures bằng cách tạo 1redux slice riêng VD (user: userComponent & userSlice , giỏ hàng: cartComponent & cartSlice)
            </p>
            <p>B1 Tạo store: "/app/store.js" </p>
            <p>B2 Tại index.js import và bọc app  = thẻ Provider </p>
            <p>B3 Tạo Slice và import vào store </p>
            <p>+ initialState : khởi tạo</p>
            <p>+ name: tên để store.js quản lý</p>
            <p>+ reducers: các reducer để nhận và cập nhập state</p>
            <p>B4 import Slice (lát cắt) của vào component cần dùng</p>
            <p>B5 tại UI import "action" cần dùng, tạo 1 event triggle đến action = useDispatch() , và truyền vào payload dispath(sliceName.actions.reducerName) (data truyền đến cho reducer cập nhật)</p>
            <p>B6 tại component cần hiển thị hoặc sử dụng sử dụng useSelector(state=>state cần lấy) </p>
        </div>
    );
}

export default Doc;