<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page session="true"%>
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
					<li class="active"><a href="javascript:link('<c:url value="/container.jsp?url=customer" />')">고객정보(T)</a></li>
					<li><a href="javascript:link('<c:url value="/container.jsp?url=contact" />')">접촉이력(T)</a></li>
					<li><a href="javascript:link('/ukey/customer');">고객정보(S)</a></li>
					<li><a href="javascript:link('/ukey/contact');">접촉이력(S)</a></li>
					<li><a href="javascript:link('/ukey#/customer.html');">Client</a></li>
				</ul>
			</nav>
			<!--#include virtual = "/include/main_sysSet.asp"-->
			<%@ include file="include/main_sysSet.jsp"%>
		</header>
		<!--end of document header-->

		<div id="container" >
			<!--#include virtual = "/include/main_search.asp"-->
			<%@ include file="include/main_search.jsp"%>

			<div id="ts" class="container-fluid" style="margin-left: 100px;">
				<p>
					<span class="glyphicon glyphicon-bookmark"></span>&nbsp;고객정보
				</p>
				<div class="panel panel-primary">
					<div class="panel-heading">
						<form class="form-inline" role="form" >
							<div class="form-group">
								<label for="customer-type">구분&nbsp;&nbsp;</label> <select
									class="form-control" id="customer-type">
									<option>이동번화번호</option>
									<option>주민번호</option>
								</select>
							</div>
							<div class="form-group">
								<label class="sr-only" for="inputTel1">telephone</label> <select
									class="form-control" id="inputTel1">
									<option value="010" <c:if test="${customer.contactMain1st == '010' }">
											${'selected'}
											</c:if>>010</option>
									<option value="011" <c:if test="${customer.contactMain1st == '011' }">
											${'selected'}
											</c:if>>011</option>
									<option value="016" <c:if test="${customer.contactMain1st == '016' }">
											${'selected'}
											</c:if>>016</option>
									<option value="017" <c:if test="${customer.contactMain1st == '017' }">
											${'selected'}
											</c:if>>017</option>
									<option value="018" <c:if test="${customer.contactMain1st == '018' }">
											${'selected'}
											</c:if>>018</option>
									<option value="019" <c:if test="${customer.contactMain1st == '019' }">
											${'selected'}
											</c:if>>019</option>
								</select>
							</div>
							<div class="form-group">
								<label class="sr-only" for="inputTel2">telephone</label> <input
									type="tel"  class="form-control" id="inputTel2"
									placeholder="1234-3450" value='<c:out value="${customer.contactMain2nd}"/>'>
							</div>
							<button  class="btn btn-default" onclick="javascript:link('<c:url value="/container.jsp?url=customer" />')">
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
							<div class="col-md-4"><!-- 1st Column -->
								<div class="form-group">
									<label for="changeid" class="col-md-4 control-label">변경유형</label>
									<div class="col-md-8">
										<select class="form-control" id="customer-type">
											<option <c:if test="${customer.changeType == '신규'}">
											${'selected' }
											</c:if>>신규</option>
											<option <c:if test="${customer.changeType == '기변'}">
											${'selected' }
											</c:if>>기변</option>
										</select>
									</div>
								</div>
								<div class="form-group">
									<label for="customer-name" class="col-md-4 control-label" >고객명</label>
									<div class="col-md-4" style="padding-right:0px;">
										<input type="text" class="form-control" id="customer-name" placeholder="(고객명)" value="<c:out value='${customer.name}'/>">
									</div>
									<div class="col-md-4" style="padding-left:0px;">
										<div class="input-group" >
											<span class="input-group-btn" >
												<button class="btn btn-default" type="button" >실명</button>
											</span><input type="text" class="form-control text-center" value="<c:out value='${customer.realName}'/>" placeholder="12344444" style="padding:0px;margin:0px;">
										</div>
									</div>
								</div>
								<div class="form-group">
									<label for="customer-name" class="col-md-4 control-label" >연락번호1</label>
									<div class="col-md-2" style="padding-right:0px;">
										<select
											class="form-control" id="inputTel1">
											<option value="010" <c:if test="${customer.contactMain1st == '010' }">
											${'selected'}
											</c:if>>010</option>
									<option value="011" <c:if test="${customer.contactMain1st == '011' }">
											${'selected'}
											</c:if>>011</option>
									<option value="016" <c:if test="${customer.contactMain1st == '016' }">
											${'selected'}
											</c:if>>016</option>
									<option value="017" <c:if test="${customer.contactMain1st == '017' }">
											${'selected'}
											</c:if>>017</option>
									<option value="018" <c:if test="${customer.contactMain1st == '018' }">
											${'selected'}
											</c:if>>018</option>
									<option value="019" <c:if test="${customer.contactMain1st == '019' }">
											${'selected'}
											</c:if>>019</option>
										</select>
									</div>
									<div class="col-md-6" style="padding-left:0px;">
										<input type="text" class="form-control" id="customer-name" placeholder="전화번호" value="<c:out value='${customer.contactMain2nd}'/>">
									</div>
								</div>
								<div class="form-group">
									<label for="customer-name" class="col-md-4 control-label" >연락번호2</label>
									<div class="col-md-2" style="padding-right:0px;">
										<select
											class="form-control" id="inputTel1">
											<option value="010" <c:if test="${customer.contactMain1st == '010' }">
											${'selected'}
											</c:if>>010</option>
									<option value="011" <c:if test="${customer.contactSub1st == '011' }">
											${'selected'}
											</c:if>>011</option>
									<option value="016" <c:if test="${customer.contactSub1st == '016' }">
											${'selected'}
											</c:if>>016</option>
									<option value="017" <c:if test="${customer.contactSub1st == '017' }">
											${'selected'}
											</c:if>>017</option>
									<option value="018" <c:if test="${customer.contactSub1st == '018' }">
											${'selected'}
											</c:if>>018</option>
									<option value="019" <c:if test="${customer.contactSub1st == '019' }">
											${'selected'}
											</c:if>>019</option>
										</select>
									</div>
									<div class="col-md-6" style="padding-left:0px;">
										<input type="text" class="form-control" id="customer-name" placeholder="전화번호" value="<c:out value='${customer.contactSub2nd}'/>">
									</div>
								</div>
							</div><!-- 1st Column -->
							<div class="col-md-4"><!-- 2nd Column -->
								<div class="form-group">
									<label for="customer-type" class="col-md-4 control-label" >고객유형</label>
									<div class="col-md-3" style="padding-right:0px;">
										<select
											class="form-control" id="inputTel1">
											<option selected>개인</option>
											<option>법인</option>
										</select>
									</div>
									<div class="col-md-5" >
										<select
											class="form-control" id="inputTel1">
											<option selected>일반</option>
											<option>임시</option>
										</select>
									</div>
								</div>
								<div class="form-group">
									<label for="customer-type" class="col-md-4 control-label" >직업</label>
									<div class="col-md-3" style="padding-right:0px;">
										<select
											class="form-control" id="inputTel1">
											<option selected>회사원</option>
											<option>학생</option>
											<option>무직</option>
										</select>
									</div>
									<div class="col-md-5" >
										<select
											class="form-control" id="inputTel1">
											<option selected>기술직</option>
											<option>전문직</option>
										</select>
									</div>
								</div>
								<div class="form-group">
									<label for="customer-type" class="col-md-4 control-label" >우편번호</label>
									<div class="col-md-8" >
										<div class="input-group" >
											<input type="text" class="form-control text-center"  placeholder="000-000" value="<c:out value='${customer.zipCode}'/>">
											<span class="input-group-btn" >
												<button class="btn btn-default" type="button" >검색</button>
											</span>
										</div>
									</div>
								</div>
								<div class="form-group">
									<label for="customer-type" class="col-md-4 control-label" >주소</label>
									<div class="col-md-8">
										<input type="text" class="form-control"  placeholder="XX도 XX시 XX동" value="<c:out value='${customer.address}'/>" >
									</div>
								</div>
								<div class="form-group">
									<div class="col-md-8 col-md-offset-4">
										<input type="text" class="form-control"  placeholder="000-000번지" value="<c:out value='${customer.addressDetail}'/>">
									</div>
								</div>
							</div><!-- 2nd Column -->
							<div class="col-md-4"><!-- 3rd Column -->
								<div class="form-group">
									<label for="customer-type" class="col-md-4 control-label" >복지유형</label>
									<div class="col-md-8">
										<select class="form-control" id="inputTel1">
											<option></option>
											<option>A</option>
											<option>B</option>
										</select>
									</div>
								</div>
								<div class="form-group">
									<label for="customer-type" class="col-md-4 control-label" >해택정보</label>
									<div class="col-md-8">
										<input type="text" class="form-control"  placeholder="해택정보" >
									</div>
								</div>
								<div class="form-group">
									<label for="customer-type" class="col-md-4 control-label" >보훈번호</label>
									<div class="col-md-8">
										<input type="text" class="form-control"  placeholder="123-00-9999" value="<c:out value='${customer.specialLicense}'/>">
									</div>
								</div>
								<div class="form-group">
									<label for="customer-type" class="col-md-4 control-label" >특수사업자</label>
									<div class="col-md-8">
										<input type="text" class="form-control"  placeholder="" >
									</div>
								</div>
								<div class="form-group">
									<label for="customer-type" class="col-md-4 control-label" >체류자격</label>
									<div class="col-md-8">
										<input type="text" class="form-control"  placeholder="" value="<c:out value='${customer.residenceType}'/>">
									</div>
								</div>
							</div><!-- 3rd Column -->
						</div>
					</div>
			
					<div class="panel panel-default">
						<div class="panel-body">
							<ul id="payment-view" class="nav nav-tabs">
								<li class="active"><a href="#detail-view" data-toggle="tab">상세정보</a></li>
								<li><a href="#benifit-view" data-toggle="tab">복지해택정보</a></li>
							</ul>
							<div class="tab-content">
							<div class="tab-pane active" id="detail-view" style="margin-top:10px;">
								<div class="col-md-5"><!-- 1st Column -->
									<div class="form-group">
									<label for="customer-type" class="col-md-4 control-label" >생년월일</label>
									<div class="col-md-8">
									<div class="input-group" >
										<span class="input-group-addon">
        									<input type="radio" name="calendar" checked>양력
        									<input type="radio" name="calendar">음력
      									</span>
      									<input type="date" class="form-control" value="<c:out value='${customer.birthday}'/>"/>
									</div>
									</div>
									</div>
									<div class="form-group">
									<label for="customer-type" class="col-md-4 control-label" >취미</label>
									<div class="col-md-8">
									<div class="col-md-4">
										<div class="input-group">
										<input type="text" class="form-control" placeholder="오페라"/>
										<span class="input-group-btn">
        									<button class="btn" type="button" style="background-color:#DDD ">...</button>
      									</span>
										</div>
									</div>
									<div class="col-md-4">
										<div class="input-group">
										<input type="text" class="form-control" placeholder="음악감상"/>
										<span class="input-group-btn">
        									<button class="btn btn-default" type="button" style="background-color:#DDD ">...</button>
      									</span>
										</div>
									</div>
									<div class="col-md-4">
										<div class="input-group">
										<input type="text" class="form-control" placeholder="스포츠"/>
										<span class="input-group-btn">
        									<button class="btn btn-default" type="button" style="background-color:#DDD ">...</button>
      									</span>
										</div>
									</div>
										
									</div>
									</div>
									<div class="form-group">
									<label for="" class="col-md-4 control-label" >결혼기념일</label>
									<div class="col-md-8" >
										<div class="input-group" >
											<input type="date" class="form-control text-center"  placeholder="" value="<c:out value='${customer.weddingAnniversary}'/>">
											<span class="input-group-btn" >
												<button class="btn btn-default" type="button" >추가등록</button>
											</span>
										</div>
									</div>
									</div>
									<div class="form-group">
									<label for="customer-type" class="col-md-4 control-label" >가입제한</label>
									<div class="col-md-8">
										<input type="text" class="form-control"  placeholder="" >
									</div>
									</div>
									<div class="form-group">
									<label for="customer-type" class="col-md-4 control-label" >선호채널</label>
									<div class="col-md-4" style="padding-right:0px;">
										<select
											class="form-control" id="inputTel1">
											<option>A채널</option>
											<option>B채널</option>
											<option>C채널</option>
										</select>
									</div>
									<div class="col-md-4" >
										<select
											class="form-control" id="inputTel1">
											<option>A채널</option>
											<option>B채널</option>
											<option>C채널</option>
										</select>
									</div>
									</div>
								</div>
								<div class="col-md-5"><!-- 2nd Column -->
									<div class="form-group">
									<label for="customer-type" class="col-md-4 control-label" >직장명</label>
									<div class="col-md-8">
										<input type="text" class="form-control"  placeholder="" value="<c:out value='${customer.workingPlace}'/>">
									</div>
									</div>
									<div class="form-group">
									<label for="customer-name" class="col-md-4 control-label" >직장연락번호</label>
									<div class="col-md-2" style="padding-right:0px;">
										<select
											class="form-control" id="inputTel1">
											<option selected>02</option>
											<option>070</option>
											<option>032</option>
										</select>
									</div>
									<div class="col-md-6" style="padding-left:0px;">
										<input type="text" class="form-control" id="customer-name" placeholder="전화번호" value="<c:out value='${customer.officePhone2nd}'/>">
									</div>
									</div>
									<div class="form-group">
									<label for="customer-type" class="col-md-4 control-label" >우편번호</label>
									<div class="col-md-8" >
										<div class="input-group" >
											<input type="text" class="form-control text-center"  placeholder="000-000" value="<c:out value='${customer.officeZipCode}'/>">
											<span class="input-group-btn" >
												<button class="btn btn-default" type="button" >검색</button>
											</span>
										</div>
									</div>
								</div>
								<div class="form-group">
									<label for="customer-type" class="col-md-4 control-label" >직장주소</label>
									<div class="col-md-8">
										<input type="text" class="form-control"  placeholder="XX도 XX시 XX동" value="<c:out value='${customer.officeAddress}'/>">
									</div>
								</div>
								<div class="form-group">
									<div class="col-md-8 col-md-offset-4">
										<input type="text" class="form-control"  placeholder="000-000번지" value="<c:out value='${customer.officeAddressDetail}'/>">
									</div>
								</div>
								</div>
							</div>
							<div class="tab-pane" id="benifit-view">복지</div>
						</div>
						</div>
						
					</div>
			</form>
		<div style="height:200px;"></div>
			<!--#include virtual = "/include/main_lnb.asp"-->
			<%@ include file="include/main_lnb.jsp"%>
		</div>		
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