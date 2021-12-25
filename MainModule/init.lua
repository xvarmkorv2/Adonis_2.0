--[[

	Description: Responsible for initializing server-side packages
	Author: Sceleratis
	Date: 12/05/2021

	--!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!--
	--																					--
	-- This module and all packages and scripts herein are provided without warranty. 	--
	-- Making changes here can break things and may prevent successful loading. 		--
	-- If you break something, it's on you to debug it. 								--
	-- Do NOT submit issues or demand help for problems you created. 					--
	-- Continuing means you accept any risk that comes with this.						--
	-- Proceed with caution. 															--
	--																					--
	--!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!--
--]]


--// Precursory variables/functions
local oWarn = warn

local function warn(...)
	oWarn(":: Adonis ::", ...)
end

local function addRange(tab, ...)
	for i,t in ipairs(table.pack(...)) do
		for k,v in ipairs(t) do
			table.insert(tab, v)
		end
	end
	return tab
end

--// Table shared with all packages which acts as the root table for all others
local Root = {
	Verbose = false;
	Packages = {};
	Globals = {};
	PackageHandlerModule = script.PackageHandler;
}

--// Returns to the loader
return function(Loader: {}, Settings: {}, Packages: Folder)
	--// Begin loading
	if Root.Verbose then warn("Loading packages...") end

	--// Set variables
	local start = os.clock();

	--// Get PackageHandler
	local PackageHandler = require(Root.PackageHandlerModule);

	--// Set Root table variables
	Root.PackageHandler = PackageHandler;
	Root.Settings = Settings;
	Root.Verbose = if Settings and Settings.Verbose ~= nil then Settings.Verbose else Root.Verbose

	--// Get all packages
	addRange(Root.Packages, script.Packages:GetChildren(), Packages:GetChildren());

	--// Get server packages
	local Packages = PackageHandler.GetServerPackages(Root.Packages);

	--// Load server packages
	PackageHandler.LoadPackages(Packages, "Server", Root, Packages);

	--// Loading complete
	warn("Loading complete :: Elapsed:", os.clock() - start);

	return true;
end
