import React from "react";

/**
 * Convert an array that contains data about tags to insert
 * to ReactNodes with the specified data.
 *
 * Takes an array of JSON data structured as the following:
 *  {
 *      type: <tagname>,
 *      attributes: {
 *          attributeName: <attributeValue>
 *      },
 *      body: <content>
 *  }
 *
 * Returns an array of React nodes that have been created
 */
function convertTags(tagArray) {
    const createdComponents = [];

    for (let i = 0; i < tagArray.length; i++) {
        const tag = tagArray[i];

        // Get data for tag
        const componentTag = tag.type;
        const componentName = tag.name ?? "tagManagedComponent" + i;
        const componentAttributes = tag.attributes ?? {};
        const componentContent = tag.content;
        const componentDangerousContent = tag.dangerousContent;

        // Set key for component
        componentAttributes.key = componentName;

        // Create component with content
        if (componentContent !== undefined) {
            createdComponents.push(
                React.createElement(
                    componentTag,
                    componentAttributes,
                    componentContent
                )
            );

            continue;
        }

        // Create component with dangerouslySetInnerHtml
        if (componentDangerousContent !== undefined) {
            componentAttributes.dangerouslySetInnerHTML = {
                __html: componentDangerousContent,
            };
        }

        // Create component
        createdComponents.push(
            React.createElement(componentTag, componentAttributes)
        );
    }

    return createdComponents;
}

exports.onRenderBody = (
    { setHeadComponents, setPreBodyComponents, setPostBodyComponents },
    pluginOptions
) => {
    // Add configured tags to head
    if (pluginOptions.head !== undefined) {
        setHeadComponents(convertTags(pluginOptions.head));
    }

    // Add configured tags before page body
    if (pluginOptions.preBody !== undefined) {
        setPreBodyComponents(convertTags(pluginOptions.preBody));
    }

    // Add configured tags after page body
    if (pluginOptions.postBody !== undefined) {
        setPostBodyComponents(convertTags(pluginOptions.postBody));
    }
};
