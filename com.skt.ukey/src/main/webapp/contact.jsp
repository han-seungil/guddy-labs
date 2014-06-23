<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page session="false"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!doctype html>
<html lang="kr">
<head>
<meta charset="UTF-8">
<meta name="viewport"
	content="width=device-width, initial-scale=1.0, maximum-scale=2.0, minimum-scale=1.0, user-scalable=yes" />
<meta http-equiv="X-UA-Compatible" content="IE=edge" />

<title>SK UKey 3.0</title>
<%@ include file="include/css.jsp"%>
<link href="css/bootstrap.css" rel="stylesheet">
<script>
function link(page){
	window.top.location.href=page;
}
</script>
</head>
<body>
	<div id="wrap">
		<header class="header">
			<div class="logo">
				<img src="imgs/logo.png" />
			</div>
			<nav>
				<ul class="nav nav-tabs" style="margin-top: 8px;">
					<li ><a href="javascript:link('<c:url value="/container.jsp?url=customer" />')">고객정보(T)</a></li>
					<li class="active"><a href="javascript:link('<c:url value="/container.jsp?url=contact" />')">접촉이력(T)</a></li>
					<li><a href="javascript:link('/ukey/customer');">고객정보(S)</a></li>
					<li><a href="javascript:link('/ukey/contact');">접촉이력(S)</a></li>
					<li><a href="javascript:link('/ukey#/customer.html');">Client</a></li>
				</ul>
			</nav>
			<!--#include virtual = "/include/main_sysSet.asp"-->
			<%@ include file="include/main_sysSet.jsp"%>
		</header>
		<!--end of document header-->

		<div id="container">
			<!--#include virtual = "/include/main_search.asp"-->
			<%@ include file="include/main_search.jsp"%>

			<div id="ts" class="container-fluid" style="margin-left: 100px;">
				<p>
					<span class="glyphicon glyphicon-bookmark"></span>&nbsp;접촉이력
				</p>
				<div class="panel panel-primary">
					<div class="panel-heading">
						<form class="form-inline" role="form" >
							<div class="form-group">
								<label for="customer-type">구분&nbsp;&nbsp;</label> <select
									class="form-control" id="customer-type">
									<option>서비스관리번호</option>
									<option>주민번호</option>
								</select>
							</div>
							<input type="tel"  class="form-control"
								id="inputTel2" placeholder="12343456" value="<c:out value='${contact.phoneNumber}'/>"> <label for=""
								class="control-label">기간</label> <input type="date"
								class="form-control" /> <label for="" class="control-label">~</label>
							<input type="date" class="form-control" />
							<button  class="btn btn-default" onclick="javascript:link('<c:url value="/container.jsp?url=contact" />')">
								<span class="glyphicon glyphicon-search"></span>&nbsp;조&nbsp;회
							</button>
						</form>
					</div>
				</div>
				<form class="form-horizontal" role="form">
					<div class="panel panel-info">
						<div class="panel-heading">
							<span class="glyphicon glyphicon-tag"></span>&nbsp;기본정보
						</div>
						<div class="panel-body">
							<div class="col-md-4">
								<!-- 1st Column -->
								<div class="form-group">
									<label for="customer-name" class="col-md-4 control-label">고객명</label>
									<div class="col-md-4" style="padding-right: 0px;">
										<input type="text" class="form-control" id="customer-name"
											placeholder="(고객명)" value="<c:out value='${contact.name}'/>">
									</div>
									<div class="col-md-4"
										style="padding-left: 0px; padding-right: 0px;">
										<input type="text" class="form-control text-center"
											style="padding: 0px; margin: 0px;">

									</div>
								</div>
								<div class="form-group">
									<label for="customer-type" class="col-md-4 control-label">고객유형</label>
									<div class="col-md-4" style="padding-right: 0px;">
										<input type="text" class="form-control" id="" placeholder="개인" value="<c:out value='${contact.customerType}'/>">
									</div>
									<div class="col-md-4" style="padding-right: 0px;">
										<input type="text" class="form-control" id="" placeholder="일반">
									</div>
								</div>
								<div class="form-group">
									<label for="customer-type" class="col-md-4 control-label">대표번호</label>
									<div class="col-md-4" style="padding-right: 0px;">
										<input type="text" class="form-control" id="" placeholder="개인" value="<c:out value='${contact.phoneType}'/>">
									</div>
									<div class="col-md-4" style="padding-right: 0px;">
										<input type="text" class="form-control" id="" placeholder="일반" value="<c:out value='${contact.phoneNumber}'/>">
									</div>
								</div>
								<div class="form-group">
									<label for="customer-type" class="col-md-4 control-label">겸용서비스</label>
									<div class="col-md-4" style="padding-right: 0px;">
										<input type="text" class="form-control" id="" placeholder="개인">
									</div>
									<div class="col-md-4" style="padding-right: 0px;">
										<input type="text" class="form-control" id="" placeholder="일반">
									</div>
								</div>
							</div>
							<!-- 1st Column -->
							<div class="col-md-4">
								<!-- 2nd Column -->

								<div class="form-group">
									<label for="customer-type" class="col-md-4 control-label">종류/상태</label>
									<div class="col-md-4" style="padding-right: 0px;">
										<input type="text" class="form-control" id="" placeholder="개인" value="<c:out value='${contact.type}'/>">
									</div>
									<div class="col-md-4" style="padding-right: 0px;">
										<input type="text" class="form-control" id="" placeholder="일반" value="<c:out value='${contact.status}'/>">
									</div>
								</div>
								<div class="form-group">
									<label for="customer-type" class="col-md-4 control-label">표준요금제</label>
									<div class="col-md-8" style="padding-right: 0px;">
										<input type="text" class="form-control" id="" placeholder="개인" value="<c:out value='${contact.product}'/>">
									</div>
								</div>
								<div class="form-group">
									<label for="customer-type" class="col-md-4 control-label">할부정보</label>
									<div class="col-md-8" style="padding-right: 0px;">
										<div class="input-group" style="padding-right: 0px;">
											<input type="num" class="form-control text-center"
												placeholder="0" value="<c:out value='${contact.monthlyPayment}'/>"> <span class="input-group-btn">
												<button class="btn btn-default" type="button">상세정보</button>
											</span>
										</div>
									</div>
								</div>
								<div class="form-group">
									<label for="customer-type" class="col-md-4 control-label">해택정보</label>
									<div class="col-md-8" style="padding-right: 0px;">
										<div class="input-group">
											<input type="text" class="form-control text-center"
												placeholder="T끼리 온가족할인" value="<c:out value='${contact.additionalService}'/>"> <span
												class="input-group-btn">
												<button class="btn btn-default" type="button">상세정보</button>
											</span>
										</div>
									</div>
								</div>
							</div>
							<!-- 2nd Column -->
							<div class="col-md-4">
								<!-- 3rd Column -->
								<div class="form-group">
									<label for="customer-name" class="col-md-4 control-label">단말기</label>
									<div class="col-md-4" style="padding-right: 0px;">
										<input type="text" class="form-control" id="customer-name"
											placeholder="SHW-M110S" value="<c:out value='${contact.deviceModel}'/>">
									</div>
									<div class="col-md-4" style="padding-left: 0px;">
										<div class="input-group">
											<input type="text" class="form-control text-center"
												placeholder="123******" style="padding: 0px; margin: 0px;" value="<c:out value='${contact.deviceID}'/>">
											<span class="input-group-btn">
												<button class="btn btn-default" type="button">상세</button>
											</span>
										</div>
									</div>
								</div>
								<div class="form-group">
									<label for="customer-name" class="col-md-4 control-label">용도/방식/상태</label>
									<div class="col-md-8" style="padding-right: 0px;"">
										<div class="col-md-4" style="padding-right: 0px;">
											<input type="text" class="form-control" id="customer-name"
												placeholder="일반" value="<c:out value='${contact.usage}'/>">
										</div>
										<div class="col-md-4"
											style="padding-left: 0px; padding-right: 0px;">
											<input type="text" class="form-control text-center"
												placeholder="3G" value="<c:out value='${contact.carrierType}'/>">
										</div>
										<div class="col-md-4" style="padding-left: 0px;">
											<input type="text" class="form-control text-center"
												placeholder="" value="<c:out value='${contact.usim}'/>">
										</div>
									</div>
								</div>
								<div class="form-group">
									<label for="customer-name" class="col-md-4 control-label">가입일/해지일</label>
									<div class="col-md-4" style="padding-right: 0px;">
										<input type="date" class="form-control text-center" id="">
									</div>
									<div class="col-md-4" style="padding-left: 0px;">
										<input type="date" class="form-control text-center" />
									</div>
								</div>
								<div class="form-group">
									<label for="customer-name" class="col-md-4 control-label">서비스등급</label>
									<div class="col-md-8" style="padding-right: 0px;"">
										<div class="col-md-5" style="padding-right: 0px;">
											<input type="text" class="form-control" id="customer-name"
												placeholder="GOLD(G1)" value="<c:out value='${contact.serviceLevel}'/>">
										</div>
										<div class="col-md-5"
											style="padding-left: 0px; padding-right: 0px;">
											<input type="text" class="form-control text-center"
												placeholder="">
										</div>
										<div class="col-md-2" style="padding-left: 0px;">
											<input type="text" class="form-control text-center"
												placeholder="G1">
										</div>
									</div>
								</div>
							</div>
							<!-- 3rd Column -->
						</div>
					</div>

					<div class="panel panel-default">
						<div class="panel-heading">
						<div class="container-fluid">
							<div class="col-md-4" >
							<span class="glyphicon glyphicon-tag"></span>변경이력</div>
							<div class="col-md-8 text-right" >
							<ul class="pagination " style="margin-top:0px;margin-bottom:0px;">
							  <li><a href="#">&laquo;</a></li>
							  <li><a href="#">1</a></li>
							  <li><a href="#">2</a></li>
							  <li><a href="#">3</a></li>
							  <li><a href="#">4</a></li>
							  <li><a href="#">5</a></li>
							  <li><a href="#">&raquo;</a></li>
							</ul>
							</div>
						</div>							
						</div>
						<div class="panel-body">
							<table class="table table-striped">
							<thead>
								<tr>
									<th class="col-md-1">처리일</th><!-- 1 -->
									<th class="col-md-1">구분</th><!-- 2 -->
									<th class="col-md-2">변경유형</th><!-- 3 -->
									<th class="col-md-2">사유</th><!-- 4 -->
									<th class="col-md-1">관련변경</th><!-- 5 -->
									<th class="col-md-1">당일취소</th><!-- 6 -->
									<th class="col-md-1">작업상태</th><!-- 7 -->
									<th class="col-md-3">변경내용</th><!-- 8 -->
								</tr>
							</thead>
							<tbody>
								<c:forEach var="item" items="${contact.details}" varStatus="status" begin="0" end="19">
								<tr>
									<td>${item.date}</td>
									<td>${item.serviceType}</td>
									<td>${item.changeType}</td>
									<td>${item.reason}</td>
									<td>${item.relatedChange}</td>
									<td></td>
									<td></td>
									<td>${item.description}</td>
								</tr>
								</c:forEach>
							</tbody>
							</table>
						</div>

					</div>
				</form>

			</div>
			<div style="height: 200px;"></div>
			<!--#include virtual = "/include/main_lnb.asp"-->
			<%@ include file="include/main_lnb.jsp"%>
		</div>
		<footer class="footer">
			<div class="pageNav">
				<img class="btn_temp" src="imgs/main/btn_arrowLeft.png" /><img
					src="imgs/main/btn_arrowRight.png" />
			</div>
			<nav>
				<ul>
					<li><a href="main01_01.asp"><img
							src="imgs/main/icon_document_01_01_on.png" /></a></li>
					<li><a href="main01_02.asp"><img
							src="imgs/main/icon_document_01_02_off.png" /></a></li>
					<li><a href="main01_03.asp"><img
							src="imgs/main/icon_document_01_03_off.png" /></a></li>
				</ul>
			</nav>
			<div class="recently">
				<img src="imgs/main/icon_document_recently.png" />
			</div>
		</footer>
		<!--end of footer-->
	</div>
	<!--#include virtual = "/include/main_commonElement.asp"-->
	<%@ include file="include/main_commonElement.jsp"%>

	<script src="js/common.js"></script>
	<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
	<script src="js/jquery.min.js"></script>
	<!-- Include all compiled plugins (below), or include individual files as needed -->
	<script src="js/bootstrap.js"></script>
</body>
</body>
</html>