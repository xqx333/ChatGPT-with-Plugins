export const getPlugins = () => {
  const plugins = localStorage.getItem('plugins');
  if (!plugins) 
    return
    {
    "BrowserOp":
                {
                    "id":"BrowserOp",
                    "name":"BrowserOp",
                    "description":"Browse dozens of webpages in one query. Fetch information more efficiently.",
                    "url":"https://openapi-af.op-mobile.opera.com/openapi/testplugin/.well-known/ai-plugin.json",
                    "logo":"https://openapi-af.op-mobile.opera.com/openapi/testplugin/.well-known/logo.png"
                },

    "web_search":
                {
                    "id":"web_search",
                    "name":"Web Search",
                    "description":"Search for information from the internet",
                    "url":"https://websearch.plugsugar.com",
                    "logo":"https://websearch.plugsugar.com/200x200.png"
                },
                
    "access_link":
                {
                    "id":"access_link",
                    "name":"Access Link",
                    "description":"Access any links on the web and get the information you need.",
                    "url":"https://www.accesslinks.ai/.well-known/ai-plugin.json",
                    "logo":"https://www.accesslinks.ai/.well-known/logo.png"
                },

    "pdfreader":
                {
                    "id":"pdfreader",
                    "name":"PDF Reader",
                    "description":"Access and chat with PDF links. This allows you to ask questions, summarize, simplify, or rewrite the PDF content.",
                    "url":"https://pdfreader.maila.ai/.well-known/ai-plugin.json",
                    "logo":"https://pdfreader.maila.ai/.well-known/logo.png"
                },

    "mindful_data_ai":
                {
                    "id":"mindful_data_ai",
                    "name":"MindfulDataAI",
                    "description":"Search with Google. You can search the web with Google when you are asking a question about something recent.",
                    "url":"https://chatgpt-plugin.mindfuldataai.com/.well-known/ai-plugin.json",
                    "logo":"https://chatgpt-plugin.mindfuldataai.com/logo.png"
                },

    "Diagrams":
                {
                    "id":"Diagrams",
                    "name":"Diagrams",
                    "description":"Create and display diagrams from kroki.io or using networkx and matplotlib.",
                    "url":"https://diagrams.herokuapp.com",
                    "logo":"https://diagrams.herokuapp.com/static/logo.png"
                },

    "WebPilot":
                {
                    "id":"WebPilot",
                    "name":"WebPilot",
                    "description":"This tool allows users to provide a URL(or URLs) and optionally requests for interacting with, extracting specific information or how to do with the content from the URL.",
                    "url":"https://webreader.webpilotai.com",
                    "logo":"https://webreader.webpilotai.com/logo.png"
                }
    
    "Ai PDF":
                {
                    "id":"Ai PDF",
                    "name":"Ai PDF",
                    "description":"Provide a URL to a PDF and search the document. Break the user question in multiple semantic search queries and calls as needed. Think step by step.",
                    "url":"https://plugin-3c56b9d4c8a6465998395f28b6a445b2-jexkai4vea-uc.a.run.app",
                    "logo":"https://plugin-3c56b9d4c8a6465998395f28b6a445b2-jexkai4vea-uc.a.run.app/logo.png"
                }
    };
  return JSON.parse(localStorage.getItem('plugins') as string);
};

const hasSuffix = (url: string) => {
  const regex = /.*\/\.well-known\/ai-plugin\.json$/;
  return regex.test(url);
};
export const getPluginUrl = (url: string) => {
  const pluginUrl = url.trim();
  const testResult = hasSuffix(pluginUrl);
  if (!testResult) {
    if (pluginUrl.endsWith('/')) {
      return pluginUrl + '.well-known/ai-plugin.json';
    } else {
      return pluginUrl + '/.well-known/ai-plugin.json';
    }
  }
  return pluginUrl;
};
