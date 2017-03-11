<?php

/*
 * Textpattern Content Management System
 * https://textpattern.io/
 *
 * Copyright (C) 2017 The Textpattern Development Team
 *
 * This file is part of Textpattern.
 *
 * Textpattern is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation, version 2.
 *
 * Textpattern is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Textpattern. If not, see <https://www.gnu.org/licenses/>.
 */

if (!defined('TXP_UPDATE')) {
    exit("Nothing here. You can't access this file directly.");
}

// Remove a few licence files. De-clutters the root directory a tad.
if (is_writable(txpath.DS.'..')) {
    foreach (array('LICENSE-BSD-3', 'LICENSE-LESSER') as $v) {
        $file = txpath.DS.'..'.DS.$v.'.txt';

        if (file_exists($file)) {
            unlink($file);
        }
    }
}

// Add cache to forms.
$cols = getThings("DESCRIBE `".PFX."txp_form`");

if (!in_array('cached', $cols)) {
    safe_alter('txp_form', "ADD cached DATETIME DEFAULT NULL AFTER type");
}

if (!in_array('cache', $cols)) {
    safe_alter('txp_form', "ADD cache MEDIUMTEXT AFTER Form");
}
