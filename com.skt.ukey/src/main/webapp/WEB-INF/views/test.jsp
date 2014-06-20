<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page session="true"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>


${customer.contactMain1st}
${customer.contactMain2nd}
${customer.name}
=====<br>
<c:if test="${customer.contactMain1st == '010' }">
											${'selected'}
											</c:if>
<a href="<c:url value='/main.jsp' />">go</a>