<%@ page import="com.liferay.portal.kernel.util.Constants" %>

<%@ include file="./init.jsp" %>

<liferay-portlet:actionURL portletConfiguration="<%= true %>"
                           var="configurationActionURL" />

<liferay-portlet:renderURL portletConfiguration="<%= true %>"
                           var="configurationRenderURL" />

<aui:form action="<%= configurationActionURL %>" method="post" name="fm">

    <aui:input name="<%= Constants.CMD %>" type="hidden"
               value="<%= Constants.UPDATE %>" />

    <aui:input name="redirect" type="hidden"
               value="<%= configurationRenderURL %>" />

    <aui:fieldset>

        <aui:select name="favoriteColor" label="Favorite Color"
                    value="<%= favoriteColor %>">
            <aui:option value="indigo">Indigo</aui:option>
            <aui:option value="blue">Blue</aui:option>
            <aui:option value="green">Green</aui:option>
            <aui:option value="yellow">Yellow</aui:option>
            <aui:option value="orange">Orange</aui:option>
            <aui:option value="red">Red</aui:option>
        </aui:select>

    </aui:fieldset>
    <aui:button-row>
        <aui:button type="submit"></aui:button>
    </aui:button-row>
</aui:form>