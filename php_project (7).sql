-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th6 05, 2021 lúc 12:10 PM
-- Phiên bản máy phục vụ: 10.4.19-MariaDB
-- Phiên bản PHP: 7.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `php_project`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `account`
--

CREATE TABLE `account` (
  `id` int(11) NOT NULL,
  `phone` char(12) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `user` varchar(100) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `code` char(6) DEFAULT NULL CHECK (octet_length(`code`) = 6),
  `status` varchar(20) DEFAULT NULL,
  `image` varchar(1000) NOT NULL DEFAULT 'https://findicons.com/files/icons/1994/vista_style_business_and_data/256/users.png'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `account`
--

INSERT INTO `account` (`id`, `phone`, `email`, `user`, `password`, `code`, `status`, `image`) VALUES
(8, NULL, 'sy.nguyen22@student.pahsserellesngumeriques.org', 'jjjyj', '55', NULL, 'Accept', 'https://lh3.googleusercontent.com/a-/AOh14GiYrBcPo9COfsKpA9E17tBtbcze-VqAdMvxdGDW5g=s96-c'),
(9, NULL, 'syn28200e2@gmail.com', 'Vansy', 'synguyen282001', NULL, 'Accept', 'https://findicons.com/files/icons/1994/vista_style_business_and_data/256/users.png'),
(12, '0352502604', 'thanh@gmail.com', 'Nguyen Van Thanh', 'thanh1234', '3hg7ud', 'Accept', 'https://findicons.com/files/icons/1994/vista_style_business_and_data/256/users.png'),
(13, '0352603476', NULL, 'Nguyen Thi Thu', 'd9c34799e3dad9f6', 'DRnOqg', 'Accept', 'https://findicons.com/files/icons/1994/vista_style_business_and_data/256/users.png'),
(14, '03536796728', NULL, 'Ho Thi Luong', 'luong1234', '34gh67', 'Accept', 'https://findicons.com/files/icons/1994/vista_style_business_and_data/256/users.png'),
(15, '0353679725', NULL, 'Ho Thi Khua', 'khua1234', '34F347', 'Accept', 'https://findicons.com/files/icons/1994/vista_style_business_and_data/256/users.png'),
(16, '0353679783', NULL, 'Nguyen Van Sy', 'syhau1234', '34F3fr', 'Accept', 'https://findicons.com/files/icons/1994/vista_style_business_and_data/256/users.png'),
(17, '0354539867', NULL, 'Doan Thi Kieu Oa', '25e7f338ddb489a1', 'PO5IbC', 'Not Accept', 'https://findicons.com/files/icons/1994/vista_style_business_and_data/256/users.png'),
(18, '0367986987', NULL, 'Nguyen Van B', '674d11798c2d3e61', 'IBsdPv', 'Not Accept', 'https://findicons.com/files/icons/1994/vista_style_business_and_data/256/users.png'),
(19, '0376986987', 'diem.nguyen22@student.passerellesnumeriques.org', 'Nguyen Thi Diem', '07113eaadc5fe707a07e5dabd670278e', 'IZzizV', 'Accept', 'https://findicons.com/files/icons/1994/vista_style_business_and_data/256/users.png'),
(20, '0986542465', 'duynguyen@gmail.com', 'Nguyen Hong Duy', 'c0e02008d79befd7015770683a201b04', 'UzVPMK', 'Accept', 'https://findicons.com/files/icons/1994/vista_style_business_and_data/256/users.png'),
(21, '0858843965', 'sy.nguyen22@student.passerelljesnumeriques.org', 'synguyen', 'synguyen282001', NULL, 'Accept', 'https://findicons.com/files/icons/1994/vista_style_business_and_data/256/users.png'),
(23, '', 'ggggg@gmail.com', '', 'ss', NULL, 'Accept', 'https://findicons.com/files/icons/1994/vista_style_business_and_data/256/users.png'),
(33, '0858843967', 'sy.nguyen22@student.passerellesnumeriques.org', 'synguyen', 'synguyen', NULL, 'Accept', 'https://lh3.googleusercontent.com/a-/AOh14GiYrBcPo9COfsKpA9E17tBtbcze-VqAdMvxdGDW5g=s96-c'),
(67, 'null', 'sy.nguyen22a@gmail.com', 'Sỷ Nguyễn', 'null', NULL, 'Accept', 'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=848082605917894&height=50&width=50&ext=1625477653&hash=AeSsQPJUuOA2g-ZCy04'),
(104, NULL, 'syn282002@gmail.com', 'Nguyen vlock Sy', 'null', NULL, 'Accept', 'https://lh3.googleusercontent.com/a/AATXAJzmgnYXsuN2XUJ86FPi4JeI6yEm_N2vVCKRAocX=s96-c'),
(105, NULL, 'hu.nguyen22@student.passerellesnumeriques.orgf', 'Nguyen Doan Ngoc Hau', 'null', NULL, 'Accept', 'https://lh3.googleusercontent.com/a-/AOh14Gi_3wj3JsYsjTgjOZOXuzq6V8rICovBl9LyeC_1Kg=s96-c'),
(134, '09458900343', 'hau.nguyen22@student.passerellesnumtriques.org', 'synguyen', '123', NULL, 'Accept', 'https://findicons.com/files/icons/1994/vista_style_business_and_data/256/users.png'),
(138, '08568436665', 'hau.nguyen22@student.passerellesnumeriques.org', 'synguyen', '1234', NULL, 'Accept', 'https://lh3.googleusercontent.com/a-/AOh14Gi_3wj3JsYsjTgjOZOXuzq6V8rICovBl9LyeC_1Kg=s96-c');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `account_admin`
--

CREATE TABLE `account_admin` (
  `id` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `status` varchar(100) NOT NULL,
  `image` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `account_admin`
--

INSERT INTO `account_admin` (`id`, `email`, `password`, `status`, `image`) VALUES
(4, 'syn2820012@gmail.com', 'synguyen28200123', 'Accept', 'https://cdn-img.thethao247.vn/upload/kienlv/2020/09/11/tuyen-thu-dt-viet-nam-cong-khai-ban-gai-xinh-nhu-mong1599795990.png'),
(5, 'syn282002@gmail.com', 'synguyen282001', 'Accept', 'https://cdn-img.thethao247.vn/upload/kienlv/2020/09/11/tuyen-thu-dt-viet-nam-cong-khai-ban-gai-xinh-nhu-mong1599795990.png'),
(66, 'sy.nguyen22@student.passerellesnumeriques.org', 'synguyen', 'Accept', 'https://cdn-img.thethao247.vn/upload/kienlv/2020/09/11/tuyen-thu-dt-viet-nam-cong-khai-ban-gai-xinh-nhu-mong1599795990.png'),
(67, 'huou.ho22@student.passerellesnumeriques.org', 'huou1234', 'Accept', 'https://cdn-img.thethao247.vn/upload/kienlv/2020/09/11/tuyen-thu-dt-viet-nam-cong-khai-ban-gai-xinh-nhu-mong1599795990.png');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `cart`
--

CREATE TABLE `cart` (
  `id` int(11) NOT NULL,
  `id_cus` int(11) DEFAULT NULL,
  `id_pro` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `cart`
--

INSERT INTO `cart` (`id`, `id_cus`, `id_pro`, `quantity`) VALUES
(1, 12, 4, 4),
(2, 12, 1, 5),
(3, 12, 2, 4),
(4, 12, 3, 4),
(5, 12, 5, 4),
(106, 8, 6, 2),
(156, 67, 90, 2),
(158, 67, 75, 2);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `company`
--

CREATE TABLE `company` (
  `id` int(11) NOT NULL,
  `name` varchar(40) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `manager` varchar(30) DEFAULT NULL,
  `license_number` varchar(50) DEFAULT NULL,
  `phone` varchar(12) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `company`
--

INSERT INTO `company` (`id`, `name`, `address`, `manager`, `license_number`, `phone`, `email`) VALUES
(1111, 'L’Oréal', 'Paris-Phap', 'Max Factor', 'NG53458JG', '0919610716', 'LOreal@gmail.com'),
(1112, 'Unilever', 'London-Anh', 'Katy Perry', 'RTW3T5D5', '01234567891', 'Unilever@gmail.com'),
(1113, 'Estée Lauder Companies', 'New York-USA', 'Clairol', 'YHY75Y54H', '43523665666', 'ELC@gmail.com'),
(1114, 'Proctor and Gamble P&G', 'New York-USA', 'Hugo Boss', 'RTER3465HTY', '23413253466', 'PAGPG@gmail.com'),
(1115, 'Coty', 'New York-USA', ' Philosophy', '54Y5YTHE', NULL, NULL),
(1116, 'Shiseido ', 'Tokyo-Nhat Ban', 'Shiseido', '98IT5RE76', '743643756756', 'shiseido@gmail.com'),
(1117, 'Beiersdorf', 'Berlin-Duc', 'Labello', '5YRTT6566', NULL, NULL),
(1206, 'sy.nguyen22@student.passerellesnumerique', '101b dddd', '6666', '', 'gggg', 'gggg@gmail.com');

--
-- Bẫy `company`
--
DELIMITER $$
CREATE TRIGGER `company_after_delete` BEFORE DELETE ON `company` FOR EACH ROW delete from product where id_com=old.id
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `customer`
--

CREATE TABLE `customer` (
  `id` int(11) NOT NULL,
  `name` varchar(20) DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `gendder` char(5) DEFAULT NULL,
  `id_account` int(11) NOT NULL,
  `address` varchar(100) DEFAULT NULL,
  `phone` varchar(12) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `customer`
--

INSERT INTO `customer` (`id`, `name`, `birthday`, `gendder`, `id_account`, `address`, `phone`) VALUES
(1, 'Nguyễn Văn Sỷ', '2021-04-21', 'Male', 8, '101b dddd', '0858843965'),
(2, 'Nguyễn Văn Sỷ', '2021-04-09', 'Male', 9, NULL, NULL),
(3, 'Hồ Thị Khưa', '2001-04-15', 'Femal', 14, 'Sơn Trà', NULL),
(4, 'Hồ Thị Lương', '2001-04-14', 'Femal', 12, 'Sơn Trà', NULL),
(5, 'Nguyễn Văn Sy', '2001-04-14', 'male', 13, 'Sơn Trà', NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `manager_stock`
--

CREATE TABLE `manager_stock` (
  `id` int(11) NOT NULL,
  `id_pro` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `date_added` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `manager_stock`
--

INSERT INTO `manager_stock` (`id`, `id_pro`, `quantity`, `date_added`) VALUES
(1, 1, 10, '2021-03-29'),
(2, 2, 15, '2021-03-28'),
(3, 3, 10, '2021-03-30'),
(4, 4, 6, '2021-03-31'),
(5, 5, 15, '2021-03-31'),
(6, 6, 10, '2021-03-31'),
(12, 1, 5, '2021-04-07');

--
-- Bẫy `manager_stock`
--
DELIMITER $$
CREATE TRIGGER `stock_after_insert` AFTER INSERT ON `manager_stock` FOR EACH ROW UPDATE product set quantity=quantity+new.quantity where id=new.id_pro
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `message`
--

CREATE TABLE `message` (
  `id_cus` int(11) NOT NULL,
  `mess` longtext NOT NULL,
  `status` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `message`
--

INSERT INTO `message` (`id_cus`, `mess`, `status`) VALUES
(8, 'akdfsfsg', 'From'),
(8, 'akdfsfsg', 'From'),
(8, 'akdfsfsg', 'From'),
(8, 'akdfsfsg', 'From'),
(8, 'akdfsfsg', 'From'),
(8, 'I love you', 'To'),
(8, 'I love you', 'From'),
(8, 'I love you', 'To'),
(8, 'I love you', 'From'),
(8, 'I love you', 'To'),
(8, 'rtgrfhh', 'From'),
(8, 'ghjjjgf', 'To'),
(8, 'tyutru', 'To'),
(8, 'Ngu duoc roi\n', 'To'),
(8, 'Ok ban', 'From'),
(8, 'ghgjh', 'To'),
(8, 'ghgjh', 'To'),
(8, 'jhgkk', 'To'),
(8, 'Le Duoc Chua Vay', 'To'),
(33, 'retreyrty', 'From'),
(33, 'fhghj', 'From'),
(67, 'ytutyti', 'From'),
(33, 'êtrwytu', 'From'),
(67, 'ytuytujy', 'From'),
(8, 'fgvdhfjgf', 'To'),
(33, 'fdreeuytu', 'To'),
(8, 'dsferytryt ', 'From'),
(8, 'fdreeuygtryurytu', 'To'),
(8, 'rtyytu', 'From'),
(8, ' hellol', 'To'),
(67, 'rtyrutyiuyi', 'From'),
(67, 'Hi', 'To'),
(33, 'Chao admin', 'From'),
(105, 'Hi Admin', 'From'),
(105, 'Hi bn', 'To'),
(33, 'Hello Admin', 'From'),
(33, 'Hi bn', 'To'),
(33, 'Admin ơi', 'From'),
(33, 'Hi bạn', 'To'),
(33, 'fdhgfjhgkj', 'From'),
(33, 'Hi bạn', 'To');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `id_cus` int(11) DEFAULT NULL,
  `date_order` date DEFAULT NULL,
  `EDD` date DEFAULT NULL,
  `id_status` int(11) NOT NULL,
  `id_ship` int(11) DEFAULT NULL,
  `money` decimal(10,2) NOT NULL,
  `total_money` decimal(10,0) NOT NULL,
  `ship_money` decimal(10,0) NOT NULL,
  `phone` varchar(12) NOT NULL,
  `address` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `orders`
--

INSERT INTO `orders` (`id`, `id_cus`, `date_order`, `EDD`, `id_status`, `id_ship`, `money`, `total_money`, `ship_money`, `phone`, `address`) VALUES
(2, 8, '2021-04-05', '2021-04-05', 10, 1234, '1165.00', '2335', '3', '0858843965', '101B Lê Hữu Trác, Phước Mỹ-Sơn Trà-Đà Nẵng'),
(5, 9, '2021-04-05', '2021-04-05', 4, 1234, '35.00', '37', '2', '0858843965', '101B Lê Hữu Trác, Phước Mỹ-Sơn Trà-Đà Nẵng'),
(13, 8, '2021-05-25', '2021-06-01', 2, 66666, '600.00', '605', '5', '0858843965', '101B Lê Hữu Trác, Phước Mỹ-Sơn Trà-Đà Nẵng'),
(14, 8, '2021-05-25', '2021-06-01', 1, NULL, '455.00', '455', '0', '0858843965', '101B Lê Hữu Trác, Phước Mỹ-Sơn Trà-Đà Nẵng'),
(15, 8, '2021-05-25', '2021-06-01', 1, NULL, '455.00', '455', '0', '0858843965', '101B Lê Hữu Trác, Phước Mỹ-Sơn Trà-Đà Nẵng'),
(16, 8, '2021-05-26', '2021-06-02', 3, 12, '243.00', '245', '2', '0858843965', '101B Lê Hữu Trác, Phước Mỹ-Sơn Trà-Đà Nẵng'),
(19, 8, '2021-05-26', '2021-06-02', 7, 12, '35.00', '37', '2', '0858843965', '101B Lê Hữu Trác, Phước Mỹ-Sơn Trà-Đà Nẵng'),
(20, 8, '2021-05-26', '2021-06-02', 1, 12, '70.00', '72', '2', '0858843965', '101B Lê Hữu Trác, Phước Mỹ-Sơn Trà-Đà Nẵng'),
(21, 8, '2021-05-26', '2021-06-02', 1, 13, '70.00', '73', '3', '0858843965', '101B Lê Hữu Trác, Phước Mỹ-Sơn Trà-Đà Nẵng'),
(22, 8, '2021-05-26', '2021-06-02', 1, 12, '70.00', '72', '2', '0858843965', '101B Lê Hữu Trác, Phước Mỹ-Sơn Trà-Đà Nẵng'),
(23, 8, '2021-05-26', '2021-06-02', 1, 12, '35.00', '37', '2', '0858843965', '101B Lê Hữu Trác, Phước Mỹ-Sơn Trà-Đà Nẵng'),
(24, 8, '2021-05-26', '2021-06-02', 1, 12, '35.00', '37', '2', '0858843965', '101B Lê Hữu Trác, Phước Mỹ-Sơn Trà-Đà Nẵng'),
(25, 8, '2021-05-26', '2021-06-02', 1, 12, '35.00', '37', '2', '0858843965', '101B Lê Hữu Trác, Phước Mỹ-Sơn Trà-Đà Nẵng'),
(26, 8, '2021-05-27', '2021-06-03', 1, 12, '70.00', '72', '2', '', ''),
(27, 8, '2021-05-29', '2021-06-05', 1, 13, '735.00', '738', '3', '', ''),
(28, 8, '2021-05-29', '2021-06-05', 5, 12, '881.00', '883', '2', '', ''),
(29, 33, '2021-06-01', '2021-06-08', 1, 13, '105.00', '108', '3', '', ''),
(30, 33, '2021-06-01', '2021-06-08', 1, 12, '35.00', '37', '2', '', ''),
(31, 33, '2021-06-01', '2021-06-08', 1, 12, '35.00', '37', '2', '', ''),
(32, 33, '2021-06-01', '2021-06-08', 1, 12, '35.00', '37', '2', '0858843965', '101b dddd'),
(33, 33, '2021-06-01', '2021-06-08', 1, 12, '446.00', '448', '2', '0858843965', '101b dddd'),
(34, 33, '2021-06-04', '2021-06-11', 1, 12, '474.00', '476', '2', '0858843965', '101b dddd'),
(35, 33, '2021-06-04', '2021-06-11', 1, 12, '210.00', '212', '2', '0858843965', '101b dddd'),
(36, 67, '2021-06-05', '2021-06-12', 1, 12, '701.00', '703', '2', '0858843965', '101b dddd'),
(37, 33, '2021-06-05', '2021-06-12', 1, 12, '175.00', '177', '2', '0858843965', '101bLê hữu trác ');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `order_details`
--

CREATE TABLE `order_details` (
  `id_order` int(11) DEFAULT NULL,
  `id_pro` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `order_details`
--

INSERT INTO `order_details` (`id_order`, `id_pro`, `quantity`) VALUES
(5, 5, 3),
(5, 1, 1),
(5, 2, 1),
(5, 3, 2),
(13, 75, 8),
(14, 75, 10),
(14, 76, 2),
(14, 74, 1),
(15, 75, 10),
(15, 76, 2),
(15, 74, 1),
(16, 74, 3),
(16, 76, 1),
(16, 75, 2),
(16, 2, 1),
(19, 75, 1),
(20, 75, 1),
(20, 76, 1),
(21, 75, 1),
(21, 76, 1),
(22, 74, 1),
(22, 75, 1),
(23, 74, 1),
(24, 75, 1),
(25, 74, 1),
(2, 5, 5),
(2, 75, 22),
(2, 75, 2),
(26, 74, 1),
(26, 75, 1),
(27, 75, 21),
(28, 2, 6),
(28, 6, 2),
(28, 1, 1),
(28, 76, 2),
(28, 74, 9),
(29, 75, 3),
(30, 75, 1),
(31, 75, 1),
(32, 75, 1),
(33, 4, 2),
(33, 6, 1),
(33, 3, 1),
(33, 75, 2),
(34, 5, 1),
(34, 74, 3),
(34, 75, 2),
(35, 74, 3),
(35, 75, 3),
(36, 76, 1),
(36, 90, 1),
(37, 74, 3),
(37, 75, 2);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `order_status`
--

CREATE TABLE `order_status` (
  `id` int(11) NOT NULL,
  `status` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `order_status`
--

INSERT INTO `order_status` (`id`, `status`) VALUES
(1, 'Đang xác nhận'),
(2, 'Đang lấy hàng'),
(3, 'Đang bàn giao cho nhà vận chuyển'),
(4, 'Đang vận chuyển'),
(5, 'Đã đến kho vận chuyển'),
(6, 'Đang giao hàng'),
(7, 'Giao hàng không thành công'),
(8, 'Hoàn trả hàng'),
(9, 'Đang vận chuyển về kho'),
(10, 'Đã vận chuyển về kho'),
(11, 'Đã giao hàng'),
(12, 'Đã nhận được hàng');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `sell_price` decimal(10,0) NOT NULL,
  `title` varchar(100) DEFAULT NULL,
  `ED` date DEFAULT NULL,
  `MFG` date DEFAULT NULL,
  `image` varchar(200) DEFAULT NULL,
  `mass` int(11) DEFAULT NULL,
  `industry_id` int(11) DEFAULT NULL,
  `id_com` int(11) DEFAULT NULL,
  `quantity` int(11) NOT NULL,
  `status` varchar(1000) NOT NULL,
  `view` int(11) NOT NULL,
  `image1` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `product`
--

INSERT INTO `product` (`id`, `name`, `price`, `sell_price`, `title`, `ED`, `MFG`, `image`, `mass`, `industry_id`, `id_com`, `quantity`, `status`, `view`, `image1`) VALUES
(1, 'Cerave Cleanser & CLEAN', '40.00', '10', 'Ceraveiiiiii', '2021-03-06', '2021-04-11', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMX1M2flTajS4uM6kk4hX1T9rB01bo9DevLg&usqp=CAU', 88, 3, 1112, 58886, 'hot', 4, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMX1M2flTajS4uM6kk4hX1T9rB01bo9DevLg&usqp=CAU'),
(2, 'YSL 13 Lip', '45.00', '33', 'Lip', '2021-03-27', '2021-03-29', 'https://lipstick.vn/wp-content/uploads/2016/01/ysl-13-le-orange.png', 87, 4, 1112, 0, 'hot', 3, 'https://lipstick.vn/wp-content/uploads/2016/01/ysl-13-le-orange.png'),
(3, 'WHITE', '37.00', '32', 'Lotion', '2021-03-27', '2021-03-29', 'https://thorakaocaugiay.com/wp-content/uploads/2020/11/Kem-duong-trang-da-sua-de-ngoc-trai-Thorakao-30g_tcg.jpg', 77, 2, 1113, 10, 'new', 1, 'https://thorakaocaugiay.com/wp-content/uploads/2020/11/Kem-duong-trang-da-sua-de-ngoc-trai-Thorakao-30g_tcg.jpg'),
(4, 'COTTON PADS', '106.00', '100', 'Cotton makeup remover', '2021-03-27', '2021-03-29', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb9VEc7FlEdBirjH9FwNr1VgZkK_Szh2pZaw&usqp=CAU', 67, 3, 1114, 10, 'new', 1, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb9VEc7FlEdBirjH9FwNr1VgZkK_Szh2pZaw&usqp=CAU'),
(5, 'HAZELINE', '300.00', '299', 'SKIN CARE', '2021-03-19', '2021-03-21', 'https://cdn.sudospaces.com/website/topz.vn/home/topz/public_html/2019/03/kem-duong-trang-da-tot-nhat-cho-ban-4.jpg', 55, 2, 1117, 10, 'hot', 0, 'https://cdn.sudospaces.com/website/topz.vn/home/topz/public_html/2019/03/kem-duong-trang-da-tot-nhat-cho-ban-4.jpg'),
(6, 'GUCCI', '146.00', '144', 'Perfume', '2021-03-20', '2021-03-21', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaZjBTlkCtwyYQegHQZZ1nJgKB1vy1-eyB9Q&usqp=CAU', 45, 5, 1116, 10, 'hot', 1, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaZjBTlkCtwyYQegHQZZ1nJgKB1vy1-eyB9Q&usqp=CAU'),
(74, 'TEATREEWASH Tea Tree & Cinnamon Anti-Acne Oil Cont', '40.00', '35', 'This is specially formulated for acne-prone and oily skin. The Teatree oil in it helps treat acne be', '2022-09-09', '2019-09-09', 'https://beautybasketplus.com/wp-content/uploads/2020/11/teatreewash-378902_600x.png', 40, 1, 1111, 10, 'New', 100, 'https://beautybasketplus.com/wp-content/uploads/2020/11/teatreewash-378902_600x.png'),
(75, 'Best Natural Face Wash For Men with Oily Skin', '40.00', '35', 'A powerful face wash that removes oil and impurities from the skin. Made for oily to normal skin.', '2022-09-09', '2019-09-09', 'https://cdn.shopify.com/s/files/1/0513/2409/products/best_face_wash_for_men.png?v=1570823158', 40, 1, 1111, 10, 'New', 100, 'https://cdn.shopify.com/s/files/1/0513/2409/products/best_face_wash_for_men.png?v=1570823158'),
(76, 'CLEAN & CLEAR NIGHT RELAXING®', '40.00', '35', 'With deep sea minerals and sea kelp extract, this purifying cleanser cleans deep to effectively wash', '2022-09-09', '2019-09-09', 'https://www.cleanandclear.com/sites/cleanandclear_us/files/product-images/720x860-night-relaxing-face-wash.png', 40, 1, 1111, 10, 'New', 100, 'https://www.cleanandclear.com/sites/cleanandclear_us/files/product-images/720x860-night-relaxing-face-wash.png'),
(90, 'nguyen van sy', '666.00', '666', 'ghjhgkjhgkk', '2021-06-10', '2021-06-23', './images/Tre Trăm Đốt BBQ.jpg', 777, 1, 1113, 77, '', 0, '../images/Tre Trăm Đốt BBQ.jpg');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product_industry`
--

CREATE TABLE `product_industry` (
  `id` int(11) NOT NULL,
  `industry` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `product_industry`
--

INSERT INTO `product_industry` (`id`, `industry`) VALUES
(1, 'Face wash'),
(2, 'Lotion'),
(3, 'Cleanser'),
(4, 'Lipstick'),
(5, 'Perfume'),
(6, 'Skin beauty'),
(14, 'Bright skin'),
(18, 'Makeup remover');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `review`
--

CREATE TABLE `review` (
  `id` int(11) NOT NULL,
  `pro_id` int(11) NOT NULL,
  `account_id` int(11) NOT NULL,
  `review` varchar(2000) NOT NULL,
  `times` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `evaluate` int(5) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `review`
--

INSERT INTO `review` (`id`, `pro_id`, `account_id`, `review`, `times`, `evaluate`) VALUES
(1, 2, 12, 'The lipstick is very beautiful. It is very suitable for you with white skin.', '2021-05-17 16:10:29', 4),
(2, 3, 13, 'The lotion is also good. Skin whitening pink', '2021-05-17 16:10:32', 3),
(3, 4, 8, 'Makeup is fine.', '2021-05-17 16:10:35', 2),
(4, 2, 15, 'Lipstick is so good', '2021-05-17 16:10:40', 4),
(5, 1, 14, 'I haven\'t used this product yet.', '2021-05-17 16:10:42', 5),
(7, 6, 16, 'Oh. That\'s good perfumer', '2021-05-17 16:10:44', 6),
(8, 2, 8, 'sp không mùi, bền màu, nên dưỡng môi trước khi thoa, tạo hiệu ứng trắng da nhưng lại xỉn men răng', '2021-05-17 10:00:00', 5),
(9, 2, 8, 'Son rất mịn, tuyệt vời, mướt môi, màu lên đẹp sang lắm, cọ được thiết kế dễ tán màu, ko cần gương cg tán ổn dc. Thích quá nên mình lại đặt mua tiếp', '2021-05-17 10:00:00', 5),
(10, 2, 8, '66666', '2021-05-18 17:00:00', 1),
(11, 2, 8, '555', '2021-05-18 17:00:00', 1),
(12, 2, 8, 'fghfgh', '2021-05-18 17:00:00', 1),
(13, 1, 8, 'klikiloi', '2021-05-21 17:00:00', 5),
(14, 75, 8, 'ểtreyrtujtyu', '2021-05-26 17:00:00', 1),
(15, 75, 8, 'rtytrutyii', '2021-05-26 17:00:00', 5),
(16, 75, 8, 'rtytrutyiifd', '2021-05-26 17:00:00', 5),
(17, 75, 8, 'fdgfh', '2021-05-26 17:00:00', 1),
(18, 75, 8, 'Anh yêu em', '2021-05-26 17:00:00', 1),
(19, 6, 8, 'hgfhgkh', '2021-05-28 17:00:00', 1),
(20, 6, 8, 'hgfhgkh', '2021-05-28 17:00:00', 1),
(21, 75, 8, 'rty5u', '2021-05-31 17:00:00', 1),
(22, 75, 8, 'hello', '2021-05-31 17:00:00', 5),
(23, 75, 8, 'treytrytr', '2021-05-31 17:00:00', 1),
(24, 75, 33, 'fdhgfhj', '2021-05-31 17:00:00', 1),
(25, 75, 33, 'rêtrwwty', '2021-05-31 17:00:00', 1),
(26, 76, 33, 'dsds', '2021-06-03 17:00:00', 1),
(27, 76, 33, 'dsds', '2021-06-03 17:00:00', 5),
(28, 75, 33, 'Đẹp', '2021-06-03 17:00:00', 5),
(29, 75, 33, 'đẹp', '2021-06-03 17:00:00', 5),
(30, 90, 67, 'rgyfh', '2021-06-04 17:00:00', 1),
(31, 75, 33, 'ôi đẹp quá', '2021-06-04 17:00:00', 5);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `shipping_company`
--

CREATE TABLE `shipping_company` (
  `code` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `phone` char(12) DEFAULT NULL,
  `area` varchar(30) DEFAULT NULL,
  `manager` varchar(50) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `ship_money` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `shipping_company`
--

INSERT INTO `shipping_company` (`code`, `name`, `address`, `phone`, `area`, `manager`, `email`, `ship_money`) VALUES
(11, 'VNpost', 'Đà Nẵng', '09458900343', 'nationwide', 'Vietnam Post and Telecommunication Group', 'VNP@gmail.com', '6.00'),
(12, 'Giaohangnhanh', '18 An Dương Vương, Bắc Mỹ Phú, Ngũ Hành Sơn, Đà Nẵng', '03456247894', 'nationwide', 'GHN Express - GiaoHangNhanh', 'GHN@gmail.com', '2.00'),
(13, 'Giaohangtietkiem', 'Đà Nẵng', '09454635646', 'nationwide', 'Giao Hang Tiet Kiem', 'GHTK@gmail.com', '3.00'),
(1234, 'LTE', '101b Lê Hữu Trác', '0858843965', 'Đà Nẵng', 'Nguyễn Văn Sỷ', 'LTE@gmail.com', '4.00'),
(66666, 'synguyen', '101b dddd', '0858843965', 'Đà Nẵng', '6666', 'ggggg@gmail.comee', '5.00');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `statistical`
--

CREATE TABLE `statistical` (
  `id` int(11) NOT NULL,
  `id_pro` int(11) DEFAULT NULL,
  `quantity_add` int(11) DEFAULT NULL,
  `quantity_sell` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `code` (`code`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `phone` (`phone`);

--
-- Chỉ mục cho bảng `account_admin`
--
ALTER TABLE `account_admin`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Chỉ mục cho bảng `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `ytut` (`id_cus`,`id_pro`),
  ADD KEY `id_pro` (`id_pro`);

--
-- Chỉ mục cho bảng `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `phone` (`phone`),
  ADD UNIQUE KEY `emai` (`email`);

--
-- Chỉ mục cho bảng `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_account` (`id_account`),
  ADD UNIQUE KEY `dsfdf` (`phone`);

--
-- Chỉ mục cho bảng `manager_stock`
--
ALTER TABLE `manager_stock`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_pro` (`id_pro`);

--
-- Chỉ mục cho bảng `message`
--
ALTER TABLE `message`
  ADD KEY `id_cus` (`id_cus`);

--
-- Chỉ mục cho bảng `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_cus` (`id_cus`),
  ADD KEY `id_ship` (`id_ship`),
  ADD KEY `id_status` (`id_status`);

--
-- Chỉ mục cho bảng `order_details`
--
ALTER TABLE `order_details`
  ADD KEY `id_order` (`id_order`),
  ADD KEY `id_pro` (`id_pro`);

--
-- Chỉ mục cho bảng `order_status`
--
ALTER TABLE `order_status`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_com` (`id_com`),
  ADD KEY `industry_id` (`industry_id`);
ALTER TABLE `product` ADD FULLTEXT KEY `name` (`name`);

--
-- Chỉ mục cho bảng `product_industry`
--
ALTER TABLE `product_industry`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `review`
--
ALTER TABLE `review`
  ADD PRIMARY KEY (`id`),
  ADD KEY `account_id` (`account_id`),
  ADD KEY `pro_id` (`pro_id`);

--
-- Chỉ mục cho bảng `shipping_company`
--
ALTER TABLE `shipping_company`
  ADD PRIMARY KEY (`code`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Chỉ mục cho bảng `statistical`
--
ALTER TABLE `statistical`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_pro` (`id_pro`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `account`
--
ALTER TABLE `account`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=144;

--
-- AUTO_INCREMENT cho bảng `account_admin`
--
ALTER TABLE `account_admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;

--
-- AUTO_INCREMENT cho bảng `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=165;

--
-- AUTO_INCREMENT cho bảng `company`
--
ALTER TABLE `company`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1208;

--
-- AUTO_INCREMENT cho bảng `customer`
--
ALTER TABLE `customer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `manager_stock`
--
ALTER TABLE `manager_stock`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT cho bảng `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT cho bảng `order_status`
--
ALTER TABLE `order_status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT cho bảng `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=92;

--
-- AUTO_INCREMENT cho bảng `product_industry`
--
ALTER TABLE `product_industry`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT cho bảng `review`
--
ALTER TABLE `review`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`id_pro`) REFERENCES `product` (`id`);

--
-- Các ràng buộc cho bảng `customer`
--
ALTER TABLE `customer`
  ADD CONSTRAINT `customer_ibfk_1` FOREIGN KEY (`id_account`) REFERENCES `account` (`id`);

--
-- Các ràng buộc cho bảng `manager_stock`
--
ALTER TABLE `manager_stock`
  ADD CONSTRAINT `manager_stock_ibfk_1` FOREIGN KEY (`id_pro`) REFERENCES `product` (`id`);

--
-- Các ràng buộc cho bảng `message`
--
ALTER TABLE `message`
  ADD CONSTRAINT `message_ibfk_1` FOREIGN KEY (`id_cus`) REFERENCES `account` (`id`);

--
-- Các ràng buộc cho bảng `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`id_ship`) REFERENCES `shipping_company` (`code`),
  ADD CONSTRAINT `orders_ibfk_3` FOREIGN KEY (`id_ship`) REFERENCES `shipping_company` (`code`),
  ADD CONSTRAINT `orders_ibfk_4` FOREIGN KEY (`id_cus`) REFERENCES `account` (`id`),
  ADD CONSTRAINT `orders_ibfk_5` FOREIGN KEY (`id_status`) REFERENCES `order_status` (`id`);

--
-- Các ràng buộc cho bảng `order_details`
--
ALTER TABLE `order_details`
  ADD CONSTRAINT `order_details_ibfk_2` FOREIGN KEY (`id_pro`) REFERENCES `product` (`id`),
  ADD CONSTRAINT `order_details_ibfk_3` FOREIGN KEY (`id_order`) REFERENCES `orders` (`id`);

--
-- Các ràng buộc cho bảng `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_2` FOREIGN KEY (`id_com`) REFERENCES `company` (`id`),
  ADD CONSTRAINT `product_ibfk_3` FOREIGN KEY (`industry_id`) REFERENCES `product_industry` (`id`);

--
-- Các ràng buộc cho bảng `review`
--
ALTER TABLE `review`
  ADD CONSTRAINT `review_ibfk_1` FOREIGN KEY (`account_id`) REFERENCES `account` (`id`),
  ADD CONSTRAINT `review_ibfk_2` FOREIGN KEY (`pro_id`) REFERENCES `product` (`id`);

--
-- Các ràng buộc cho bảng `statistical`
--
ALTER TABLE `statistical`
  ADD CONSTRAINT `statistical_ibfk_1` FOREIGN KEY (`id_pro`) REFERENCES `product` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
