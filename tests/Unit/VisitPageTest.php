<?php

namespace Tests\Feature;

use Tests\TestCase;

class VisitPageTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testVisitHome()
    {
        $response = $this->get('/');

        $response->assertSuccessful();
    }
}
