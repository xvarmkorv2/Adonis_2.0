"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3113],{71279:function(e){e.exports=JSON.parse('{"functions":[{"name":"Warn","desc":"Console warnings","params":[{"name":"...","desc":"","lua_type":"any"}],"returns":[],"function_type":"static","source":{"line":188,"path":"src/MainModule/Packages/System.Utilities/Shared/Utilities.lua"}},{"name":"MemoryCache","desc":"Returns a new MemoryCache object.","params":[{"name":"data","desc":"","lua_type":"DefaultCacheData"}],"returns":[{"desc":"","lua_type":"MemoryCache"}],"function_type":"method","source":{"line":231,"path":"src/MainModule/Packages/System.Utilities/Shared/Utilities.lua"}},{"name":"RunFunction","desc":"Runs the given function and outputs any errors.","params":[{"name":"func","desc":"Function to run","lua_type":"function"},{"name":"...","desc":"Data to pass to ran function","lua_type":"any"}],"returns":[],"function_type":"method","yields":true,"source":{"line":253,"path":"src/MainModule/Packages/System.Utilities/Shared/Utilities.lua"}},{"name":"RandomString","desc":"Generates a random string","params":[{"name":"len","desc":"String length","lua_type":"int"},{"name":"charset","desc":"Character set to use for random generation","lua_type":"string"}],"returns":[{"desc":"","lua_type":"string"}],"function_type":"method","source":{"line":36,"path":"src/MainModule/Packages/System.Utilities/Shared/Modules/HelperMethods.lua"}},{"name":"Waiter","desc":"Uses a BindableEvent to yield/release a calling thread","params":[],"returns":[{"desc":"","lua_type":"Waiter"}],"function_type":"method","source":{"line":83,"path":"src/MainModule/Packages/System.Utilities/Shared/Modules/HelperMethods.lua"}},{"name":"Pop","desc":"Removes the first element from a table and returns it.","params":[{"name":"tab","desc":"","lua_type":"{}"}],"returns":[{"desc":"","lua_type":"any"}],"function_type":"method","source":{"line":98,"path":"src/MainModule/Packages/System.Utilities/Shared/Modules/HelperMethods.lua"}},{"name":"Queue","desc":"Queues up a function to run","params":[{"name":"key","desc":"","lua_type":"string"},{"name":"func","desc":"Function to queue","lua_type":"function"},{"name":"noYield","desc":"If this is true, this will not yield until queued function execution is complete","lua_type":"bool"}],"returns":[{"desc":"Function results","lua_type":"any"}],"function_type":"method","yields":true,"source":{"line":111,"path":"src/MainModule/Packages/System.Utilities/Shared/Modules/HelperMethods.lua"}},{"name":"ProcessQueue","desc":"Handles per-queue processing when a new function is added to a queue.","params":[{"name":"queue","desc":"Queue table","lua_type":"{}"},{"name":"key","desc":"Queue key","lua_type":"string"}],"returns":[],"function_type":"method","source":{"line":145,"path":"src/MainModule/Packages/System.Utilities/Shared/Modules/HelperMethods.lua"}},{"name":"RateLimit","desc":"Provided a key, tracks the last time this method was called with that key and will return true on a subsequent call if the time between now and the last call tick is less than the specified timeout value.","params":[{"name":"key","desc":"Rate limit key","lua_type":"string"},{"name":"data","desc":"","lua_type":"RateLimitOptions"}],"returns":[{"desc":"","lua_type":"bool"}],"function_type":"method","source":{"line":194,"path":"src/MainModule/Packages/System.Utilities/Shared/Modules/HelperMethods.lua"}},{"name":"EditInstance","desc":"Modifies an Instance\'s properties & other data according to the supplied dictionary.\\nSupports the following special entries in the provided properties table:\\nEvents {} (EventName = FunctionToConnect),\\nChildren {} (Property tables describing children to generate),\\nAttributes {} (AttributeName = AttributeValue)","params":[{"name":"object","desc":"","lua_type":"Instance"},{"name":"properties","desc":"","lua_type":"{[string]:any}?): (Instance, {[string]:RBXScriptConnection}"}],"returns":[{"desc":"","lua_type":"Instance"}],"function_type":"method","source":{"line":226,"path":"src/MainModule/Packages/System.Utilities/Shared/Modules/HelperMethods.lua"}},{"name":"CreateInstance","desc":"Creates a new instance and calls Utilities:EditInstance on it with the provided properties table.","params":[{"name":"class","desc":"Instance ClassName","lua_type":"string"},{"name":"properties","desc":"Instance properties","lua_type":"{}"}],"returns":[{"desc":"","lua_type":"Instance"}],"function_type":"method","source":{"line":285,"path":"src/MainModule/Packages/System.Utilities/Shared/Modules/HelperMethods.lua"}},{"name":"IsServer","desc":"Returns true if this is running on the server.","params":[],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"method","source":{"line":294,"path":"src/MainModule/Packages/System.Utilities/Shared/Modules/HelperMethods.lua"}},{"name":"IsClient","desc":"Returns true if this is running on the client.","params":[],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"method","source":{"line":303,"path":"src/MainModule/Packages/System.Utilities/Shared/Modules/HelperMethods.lua"}},{"name":"IsStudio","desc":"Returns true if this is running in studio.","params":[],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"method","source":{"line":312,"path":"src/MainModule/Packages/System.Utilities/Shared/Modules/HelperMethods.lua"}},{"name":"GetTime","desc":"Returns os.time()","params":[],"returns":[{"desc":"","lua_type":"number"}],"function_type":"method","source":{"line":321,"path":"src/MainModule/Packages/System.Utilities/Shared/Modules/HelperMethods.lua"}},{"name":"GetFormattedTime","desc":"Returns a formatted time or datetime string.","params":[{"name":"optTime","desc":"Optional seconds since epoch","lua_type":"number"},{"name":"withDate","desc":"If true, output string includes date","lua_type":"boolean"}],"returns":[{"desc":"","lua_type":"string"}],"function_type":"method","source":{"line":332,"path":"src/MainModule/Packages/System.Utilities/Shared/Modules/HelperMethods.lua"}},{"name":"FormatNumber","desc":"Returns a formatted string of the provided number; Ex: 100000 -> \\"100,000\\"","params":[{"name":"num","desc":"","lua_type":"number"}],"returns":[{"desc":"","lua_type":"string"}],"function_type":"method","source":{"line":354,"path":"src/MainModule/Packages/System.Utilities/Shared/Modules/HelperMethods.lua"}},{"name":"FormatPlayer","desc":"Formats a Player\'s name as such: \'Username (@DisplayName)\' or \'@UserEqualsDisplayName\'.\\nOptionally appends the player\'s UserId in square brackets.","params":[{"name":"plr","desc":"","lua_type":"Player"},{"name":"withUserId","desc":"","lua_type":"boolean"}],"returns":[{"desc":"","lua_type":"string"}],"function_type":"method","source":{"line":378,"path":"src/MainModule/Packages/System.Utilities/Shared/Modules/HelperMethods.lua"}},{"name":"FormatStringForRichText","desc":"Escapes RichText tags in the provided string.","params":[{"name":"str","desc":"Input string","lua_type":"string"}],"returns":[{"desc":"","lua_type":"string"}],"function_type":"method","source":{"line":390,"path":"src/MainModule/Packages/System.Utilities/Shared/Modules/HelperMethods.lua"}},{"name":"AddRange","desc":"Inserts elements from supplied ordered tables into the first table.","params":[{"name":"tab","desc":"Table to insert subsequent table contents into","lua_type":"{}"},{"name":"...","desc":"Ordered tables whos contents will be inserted into the first table","lua_type":"{}"}],"returns":[{"desc":"","lua_type":"tab"}],"function_type":"method","source":{"line":401,"path":"src/MainModule/Packages/System.Utilities/Shared/Modules/HelperMethods.lua"}},{"name":"TableSub","desc":"Given an ordered table, returns a subset of that table.","params":[{"name":"tab","desc":"","lua_type":"{}"},{"name":"startPos","desc":"","lua_type":"number"},{"name":"endPos","desc":"Optional","lua_type":"number"}],"returns":[{"desc":"","lua_type":"subset"}],"function_type":"method","source":{"line":419,"path":"src/MainModule/Packages/System.Utilities/Shared/Modules/HelperMethods.lua"}},{"name":"Trim","desc":"Removes excess whitespace from strings.","params":[{"name":"str","desc":"","lua_type":"string"}],"returns":[{"desc":"","lua_type":"string"}],"function_type":"method","source":{"line":429,"path":"src/MainModule/Packages/System.Utilities/Shared/Modules/HelperMethods.lua"}},{"name":"ReplaceCharacters","desc":"Splits a string into multiple sub-strings, splitting at SplitChar; Ignores split characters surrounded by double or single quotes.","params":[{"name":"str","desc":"","lua_type":"string"},{"name":"chars","desc":"","lua_type":"{}"},{"name":"replaceWith","desc":"","lua_type":"string"}],"returns":[{"desc":"","lua_type":"string"}],"function_type":"method","source":{"line":441,"path":"src/MainModule/Packages/System.Utilities/Shared/Modules/HelperMethods.lua"}},{"name":"RemoveQuotes","desc":"Removes quotations surrounding text.","params":[{"name":"str","desc":"","lua_type":"string"}],"returns":[{"desc":"","lua_type":"string"}],"function_type":"method","source":{"line":454,"path":"src/MainModule/Packages/System.Utilities/Shared/Modules/HelperMethods.lua"}},{"name":"SplitString","desc":"Splits the provided string while respecting content within quotations.","params":[{"name":"str","desc":"Input string","lua_type":"string"},{"name":"splitChar","desc":"Split character","lua_type":"string"},{"name":"removeQuotes","desc":"If true, substrings surrounded by quotes will have their quotation marks removed in the output string","lua_type":"boolean"}],"returns":[{"desc":"","lua_type":"string"}],"function_type":"method","source":{"line":466,"path":"src/MainModule/Packages/System.Utilities/Shared/Modules/HelperMethods.lua"}},{"name":"JoinStrings","desc":"Joins strings together using the join character provided.","params":[{"name":"joiner","desc":"String inserted between joined strings","lua_type":"string"},{"name":"...","desc":"Strings to join","lua_type":"string[]"}],"returns":[{"desc":"","lua_type":"string"}],"function_type":"method","source":{"line":488,"path":"src/MainModule/Packages/System.Utilities/Shared/Modules/HelperMethods.lua"}},{"name":"MergeTables","desc":"Merges tables into the first table.\\nEach subsequent table will overwrite keys in/from the tables that came before it.","params":[{"name":"tab","desc":"Table to merge subsequent tables into","lua_type":"{}"},{"name":"...","desc":"Tables to merge into the first table; Each subsequent table overwrites keys set by previous tables","lua_type":"{}"}],"returns":[{"desc":"","lua_type":"tab"}],"function_type":"method","source":{"line":509,"path":"src/MainModule/Packages/System.Utilities/Shared/Modules/HelperMethods.lua"}},{"name":"MergeTablesRecursive","desc":"Same as MergeTables, but also calls itself when overriting one table with another.","params":[{"name":"tab","desc":"Table to merge into","lua_type":"{}"},{"name":"...","desc":"Tables to merge from","lua_type":"{}"}],"returns":[{"desc":"","lua_type":"tab"}],"function_type":"method","source":{"line":525,"path":"src/MainModule/Packages/System.Utilities/Shared/Modules/HelperMethods.lua"}},{"name":"CountTable","desc":"Returns the number of elements in a given table.","params":[{"name":"tab","desc":"","lua_type":"{[any]:any}"},{"name":"excludeNumIndices","desc":"Exclude non-string indeces","lua_type":"boolean"}],"returns":[{"desc":"","lua_type":"number"}],"function_type":"method","source":{"line":545,"path":"src/MainModule/Packages/System.Utilities/Shared/Modules/HelperMethods.lua"}},{"name":"ReverseTable","desc":"Reverses the supplied ordered table.","params":[{"name":"array","desc":"","lua_type":"{[number]:any})"}],"returns":[{"desc":"","lua_type":"{[number]:any}"}],"function_type":"method","source":{"line":561,"path":"src/MainModule/Packages/System.Utilities/Shared/Modules/HelperMethods.lua"}},{"name":"Encrypt","desc":"Weak encryption used mainly for basic trust checks and remote event communication. Should not be relied on to secure sensitive data.","params":[{"name":"str","desc":"Input string","lua_type":"string"},{"name":"key","desc":"Key","lua_type":"string"},{"name":"cache","desc":"Optional cache table used to speed up future calls by storing inputs used to generate outputs","lua_type":"{}?"}],"returns":[{"desc":"","lua_type":"string"}],"function_type":"method","source":{"line":578,"path":"src/MainModule/Packages/System.Utilities/Shared/Modules/HelperMethods.lua"}},{"name":"Decrypt","desc":"Decrypts a string encrypted with Utilities:Encrypt(...)","params":[{"name":"str","desc":"","lua_type":"string"},{"name":"key","desc":"","lua_type":"string"},{"name":"cache","desc":"","lua_type":"{}?"}],"returns":[{"desc":"","lua_type":"string"}],"function_type":"method","source":{"line":614,"path":"src/MainModule/Packages/System.Utilities/Shared/Modules/HelperMethods.lua"}},{"name":"Xor","desc":"Returns true if either (and only either) A or B is truthy","params":[{"name":"a","desc":"","lua_type":"boolean"},{"name":"b","desc":"","lua_type":"boolean"}],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"method","source":{"line":648,"path":"src/MainModule/Packages/System.Utilities/Shared/Modules/HelperMethods.lua"}},{"name":"Attempt","desc":"Advanced alternative to xpcall with multiple retry logic.","params":[{"name":"tries","desc":"","lua_type":"number"},{"name":"timeBeforeRetry","desc":"","lua_type":"number"},{"name":"func","desc":"","lua_type":"function"},{"name":"errAction","desc":"","lua_type":"function(result string)"}],"returns":[{"desc":"","lua_type":"boolean, any"}],"function_type":"method","source":{"line":661,"path":"src/MainModule/Packages/System.Utilities/Shared/Modules/HelperMethods.lua"}},{"name":"MakeLoop","desc":"Creates a new loop with a specified delay between executions.\\nThe loop is broken if and when the function being executed returns truthy.","params":[{"name":"exeDelay","desc":"","lua_type":"number?"},{"name":"func","desc":"","lua_type":"function"},{"name":"dontStart","desc":"","lua_type":"boolean?"}],"returns":[],"function_type":"method","source":{"line":684,"path":"src/MainModule/Packages/System.Utilities/Shared/Modules/HelperMethods.lua"}},{"name":"Batchify","desc":"Given an ordered list of items and a desired batch size, breaks the given list into smaller batches of size.","params":[{"name":"tab","desc":"Input table","lua_type":"{}"},{"name":"size","desc":"Batch size","lua_type":"int"}],"returns":[{"desc":"","lua_type":"{int: {}}"}],"function_type":"method","source":{"line":703,"path":"src/MainModule/Packages/System.Utilities/Shared/Modules/HelperMethods.lua"}},{"name":"Iterate","desc":"Iterates through a table or an Instance\'s children, passing value-key pairs to the callback function.\\nBreaks if/when the callback returns, returning that value.\\nIf third argument is true, the iteration will include all the table\'s subtables/Instance\'s descendants.","params":[{"name":"tab","desc":"","lua_type":"{any}|Instance"},{"name":"func","desc":"","lua_type":"(any, number)->any"},{"name":"deep","desc":"","lua_type":"boolean?"}],"returns":[{"desc":"","lua_type":"any?"}],"function_type":"method","source":{"line":730,"path":"src/MainModule/Packages/System.Utilities/Shared/Modules/HelperMethods.lua"}},{"name":"CheckProperty","desc":"Safely checks if a given object has the given property.","params":[{"name":"obj","desc":"","lua_type":"Instance"},{"name":"prop","desc":"","lua_type":"string"}],"returns":[{"desc":"","lua_type":"(boolean, any)"}],"function_type":"method","source":{"line":759,"path":"src/MainModule/Packages/System.Utilities/Shared/Modules/HelperMethods.lua"}},{"name":"IsDestroyed","desc":"Checks if the given object has been destroyed by looking for an error when attempting to change the object\'s parent.\\nOnly suitable for instances with a parent property that can be changed.","params":[{"name":"object","desc":"","lua_type":"Instance"}],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"method","source":{"line":770,"path":"src/MainModule/Packages/System.Utilities/Shared/Modules/HelperMethods.lua"}},{"name":"NewProxy","desc":"Creates a newproxy object with the provided metatable.","params":[{"name":"meta","desc":"","lua_type":"{}"}],"returns":[{"desc":"","lua_type":"proxy"}],"function_type":"method","source":{"line":790,"path":"src/MainModule/Packages/System.Utilities/Shared/Modules/HelperMethods.lua"}},{"name":"FunctionProxy","desc":"Wraps a function in a NewProxy metatable. This allows it to act like a function however cannot be used as an argument to env manipulation functions.","params":[{"name":"func","desc":"","lua_type":"function"}],"returns":[{"desc":"","lua_type":"proxy"}],"function_type":"method","source":{"line":804,"path":"src/MainModule/Packages/System.Utilities/Shared/Modules/HelperMethods.lua"}},{"name":"FakePlayer","desc":"Creates a new fake player object which can be used as a stand-in for most player-related needs.","params":[{"name":"plrData","desc":"FakePlayer properties","lua_type":"{}"}],"returns":[{"desc":"","lua_type":"object"}],"function_type":"method","source":{"line":818,"path":"src/MainModule/Packages/System.Utilities/Shared/Modules/HelperMethods.lua"}},{"name":"GetTableValueByPath","desc":"Given a table, a path string, and an optional ancestry split character, nagivates through the table to the location specified by the provided path string.","params":[{"name":"table","desc":"","lua_type":"{}"},{"name":"tableAncestry","desc":"Path string (For example, \\"Settings.UI_Colors\\" with Root as the table will navigate to Root.Settings.UI_Colors)","lua_type":"string"},{"name":"splitChara","desc":"- Path split character (Defaults to \'.\')","lua_type":"string"}],"returns":[{"desc":"","lua_type":"TablePathReturn"}],"function_type":"method","source":{"line":857,"path":"src/MainModule/Packages/System.Utilities/Shared/Modules/HelperMethods.lua"}},{"name":"CheckTableEquality","desc":"Compares two tables for equality.","params":[{"name":"tab1","desc":"","lua_type":"{}"},{"name":"tab2","desc":"","lua_type":"{}"},{"name":"noRecursive","desc":"If true, recursively checks all nested tables for equality","lua_type":"boolean"}],"returns":[{"desc":"","lua_type":"boolean"}],"function_type":"method","source":{"line":885,"path":"src/MainModule/Packages/System.Utilities/Shared/Modules/HelperMethods.lua"}},{"name":"JSONEncode","desc":"JSON encodes provided data.","params":[{"name":"data","desc":"","lua_type":"any"}],"returns":[{"desc":"","lua_type":"string"}],"function_type":"method","source":{"line":915,"path":"src/MainModule/Packages/System.Utilities/Shared/Modules/HelperMethods.lua"}},{"name":"JSONDecode","desc":"JSON decodes provided string.","params":[{"name":"data","desc":"","lua_type":"string"}],"returns":[{"desc":"","lua_type":"any"}],"function_type":"method","source":{"line":925,"path":"src/MainModule/Packages/System.Utilities/Shared/Modules/HelperMethods.lua"}}],"properties":[],"types":[{"name":"DefaultCacheData","desc":"MemoryCache default data","fields":[{"name":"Cache","lua_type":"{}","desc":"Optional table to use for caching"},{"name":"Timeout","lua_type":"int","desc":"Optional default timeout for cache items; Defaults to infinite if no timeout is provided"},{"name":"AccessResetsTimer","lua_type":"bool","desc":"Bool indicated whether or not cache timers should be reset on data access"}],"source":{"line":49,"path":"src/MainModule/Packages/System.Utilities/Shared/Utilities.lua"}},{"name":"Services","desc":"Caches and returns Roblox services retrieved via game:GetService()","fields":[{"name":"index","lua_type":"string","desc":"Table index corresponding to the requested service"}],"source":{"line":195,"path":"src/MainModule/Packages/System.Utilities/Shared/Utilities.lua"}},{"name":"Events","desc":"Responsible for all non-Roblox system events; Returns Event","fields":[{"name":"index","lua_type":"string","desc":"Index corresponding to requested event"}],"source":{"line":212,"path":"src/MainModule/Packages/System.Utilities/Shared/Utilities.lua"}},{"name":"RateLimitOptions","desc":"RateLimit Options","fields":[{"name":"Cache","lua_type":"{}","desc":"Optional table to use for rate limit caching"},{"name":"Timeout","lua_type":"int","desc":"Rate limit timeout value (how much time should there be between calls?)"}],"source":{"line":187,"path":"src/MainModule/Packages/System.Utilities/Shared/Modules/HelperMethods.lua"}},{"name":"TablePathReturn","desc":"Returned by Utilities:GetTableValueByPath(...)","fields":[{"name":"Table","lua_type":"{}","desc":"Destination value nested parent table (Settings in Root.Settings.UI_Colors)"},{"name":"Index","lua_type":"string","desc":"Destination index in nested parent table"},{"name":"Value","lua_type":"any","desc":"Destination value"}],"source":{"line":849,"path":"src/MainModule/Packages/System.Utilities/Shared/Modules/HelperMethods.lua"}}],"name":"Utilities","desc":"Responsible for various utility methods and objects used throughout the system.","tags":["Utilities","Package: System.Utilities"],"realm":["Client","Server"],"source":{"line":183,"path":"src/MainModule/Packages/System.Utilities/Shared/Utilities.lua"}}')}}]);