<%@ page contentType="text/html; charset=UTF-8" import="java.util.*" %>

<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/portlet_2_0" prefix="portlet" %>

<%@ taglib uri="http://liferay.com/tld/aui" prefix="aui" %>
<%@ taglib uri="http://liferay.com/tld/portlet" prefix="liferay-portlet" %>
<%@ taglib uri="http://liferay.com/tld/theme" prefix="liferay-theme" %>
<%@ taglib uri="http://liferay.com/tld/ui" prefix="liferay-ui" %>

<%@ page import="com.example.liferay.react.portlet.MainPortletConfiguration" %>
<%@ page import="com.liferay.portal.kernel.util.StringPool" %>
<%@ page import="com.liferay.portal.kernel.util.Validator" %>

<portlet:defineObjects />

<liferay-theme:defineObjects />

<%
    MainPortletConfiguration exampleConfiguration =
            (MainPortletConfiguration)
                    renderRequest.getAttribute(MainPortletConfiguration.class.getName());

    String favoriteColor = StringPool.BLANK;

    if (Validator.isNotNull(exampleConfiguration)) {
        favoriteColor =
                portletPreferences.getValue(
                        "favoriteColor", exampleConfiguration.favoriteColor());
    }
%>