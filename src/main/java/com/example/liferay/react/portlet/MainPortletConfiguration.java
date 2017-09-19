package com.example.liferay.react.portlet;

import aQute.bnd.annotation.metatype.Meta;

/**
 * Created by akonovalov on 17.08.2017.
 */
@Meta.OCD(id = "MainPortletConfiguration")
public interface MainPortletConfiguration {
    @Meta.AD(
        deflt = "blue",
        required = false
    )
    public String favoriteColor();
}
